/* ============================================================
   MOVA — Site de Movimento
   Scroll-driven canvas animation engine
   ============================================================ */

(function () {
  "use strict";

  // ──────────────────────────────────────────────
  // CONFIG
  // ──────────────────────────────────────────────
  const FRAME_COUNT    = 192;
  const FRAME_SPEED    = 2.0;    // animation completes at ~55% scroll
  const IMAGE_SCALE    = 0.86;   // padded-cover mode (avoids clipping into header)
  const PRELOAD_BATCH  = 10;     // frames loaded immediately for fast first paint
  const FRAME_PATH     = (i) => `frames/frame_${String(i).padStart(4, "0")}.webp`;

  // Dark overlay range (stats section)
  const OVERLAY_ENTER  = 0.57;
  const OVERLAY_LEAVE  = 0.72;
  const OVERLAY_MAX    = 0.90;
  const FADE_RANGE     = 0.04;

  // Marquee visibility range
  const MARQUEE_ENTER  = 0.18;
  const MARQUEE_LEAVE  = 0.82;

  // ──────────────────────────────────────────────
  // DOM REFS
  // ──────────────────────────────────────────────
  const loader       = document.getElementById("loader");
  const loaderBar    = document.getElementById("loader-bar");
  const loaderPct    = document.getElementById("loader-percent");
  const canvasEl     = document.getElementById("canvas");
  const canvasWrap   = document.getElementById("canvas-wrap");
  const overlay      = document.getElementById("dark-overlay");
  const scrollCont   = document.getElementById("scroll-container");
  const heroSection  = document.querySelector(".hero-standalone");
  const marqueeWrap  = document.getElementById("marquee-1");
  const marqueeText  = marqueeWrap && marqueeWrap.querySelector(".marquee-text");
  const ctx          = canvasEl.getContext("2d");

  // ──────────────────────────────────────────────
  // STATE
  // ──────────────────────────────────────────────
  const frames = new Array(FRAME_COUNT).fill(null);
  let loadedCount  = 0;
  let currentFrame = 0;
  let bgColor      = "#080808";

  // ──────────────────────────────────────────────
  // CANVAS RESIZE
  // ──────────────────────────────────────────────
  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvasEl.width  = window.innerWidth  * dpr;
    canvasEl.height = window.innerHeight * dpr;
    canvasEl.style.width  = window.innerWidth  + "px";
    canvasEl.style.height = window.innerHeight + "px";
    ctx.scale(dpr, dpr);
    drawFrame(currentFrame);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // ──────────────────────────────────────────────
  // BACKGROUND COLOR SAMPLING
  // ──────────────────────────────────────────────
  function sampleBgColor(img) {
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width  = 10;
    tempCanvas.height = 10;
    const tempCtx = tempCanvas.getContext("2d");
    tempCtx.drawImage(img, 0, 0, 10, 10);
    try {
      const px = tempCtx.getImageData(0, 0, 1, 1).data;
      bgColor = `rgb(${px[0]},${px[1]},${px[2]})`;
    } catch (_) {
      bgColor = "#080808";
    }
  }

  // ──────────────────────────────────────────────
  // DRAW FRAME — Contain Mode (preserves full frame, no cropping)
  // Ideal for portrait (9:16) video on landscape screens.
  // Side areas filled with sampled bg color.
  // ──────────────────────────────────────────────
  function drawFrame(index) {
    const img = frames[index];
    if (!img) return;

    const cw = window.innerWidth;
    const ch = window.innerHeight;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Contain: scale so entire frame fits without clipping
    const scale = Math.min(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  // ──────────────────────────────────────────────
  // FRAME PRELOADER — Two-phase
  // ──────────────────────────────────────────────
  function loadFrame(index, onLoad) {
    const img = new Image();
    img.onload = () => {
      frames[index] = img;
      loadedCount++;
      if (index % 20 === 0) sampleBgColor(img);
      if (onLoad) onLoad(loadedCount);
    };
    img.onerror = () => {
      loadedCount++;
      if (onLoad) onLoad(loadedCount);
    };
    img.src = FRAME_PATH(index + 1);
  }

  function preloadAllFrames(onProgress, onComplete) {
    // Phase 1: first PRELOAD_BATCH frames immediately
    let phase1Done = 0;
    for (let i = 0; i < PRELOAD_BATCH; i++) {
      loadFrame(i, (loaded) => {
        phase1Done++;
        onProgress(loaded);
        if (i === 0 && frames[0]) {
          sampleBgColor(frames[0]);
          drawFrame(0);
        }
        if (phase1Done === PRELOAD_BATCH) {
          // Phase 2: load remaining in background
          for (let j = PRELOAD_BATCH; j < FRAME_COUNT; j++) {
            loadFrame(j, (loaded) => {
              onProgress(loaded);
              if (loaded === FRAME_COUNT) onComplete();
            });
          }
        }
      });
    }
  }

  // ──────────────────────────────────────────────
  // LOADER
  // ──────────────────────────────────────────────
  function updateLoader(loaded) {
    const pct = Math.round((loaded / FRAME_COUNT) * 100);
    if (loaderBar) loaderBar.style.width = pct + "%";
    if (loaderPct) loaderPct.textContent  = pct + "%";
  }

  function hideLoader() {
    if (loader) loader.classList.add("hidden");
    initApp();
  }

  // ──────────────────────────────────────────────
  // LENIS SMOOTH SCROLL
  // ──────────────────────────────────────────────
  function initLenis() {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    return lenis;
  }

  // ──────────────────────────────────────────────
  // CANVAS FRAME BINDING
  // ──────────────────────────────────────────────
  function initFrameBinding() {
    ScrollTrigger.create({
      trigger: scrollCont,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const accelerated = Math.min(self.progress * FRAME_SPEED, 1);
        const index = Math.min(
          Math.floor(accelerated * FRAME_COUNT),
          FRAME_COUNT - 1
        );
        if (index !== currentFrame) {
          currentFrame = index;
          requestAnimationFrame(() => drawFrame(currentFrame));
        }
      },
    });
  }

  // ──────────────────────────────────────────────
  // HERO CIRCLE-WIPE TRANSITION
  // ──────────────────────────────────────────────
  function initHeroTransition() {
    ScrollTrigger.create({
      trigger: scrollCont,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;

        // Hero fades out quickly as scroll begins
        if (heroSection) {
          heroSection.style.opacity = String(Math.max(0, 1 - p * 20));
        }

        // Canvas reveals via circle clip-path expansion
        const wipeProgress = Math.min(1, Math.max(0, (p - 0.005) / 0.08));
        const radius = wipeProgress * 80;
        canvasWrap.style.clipPath = `circle(${radius}% at 50% 50%)`;
      },
    });
  }

  // ──────────────────────────────────────────────
  // DARK OVERLAY
  // ──────────────────────────────────────────────
  function initDarkOverlay() {
    ScrollTrigger.create({
      trigger: scrollCont,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        let opacity = 0;

        if (p >= OVERLAY_ENTER - FADE_RANGE && p <= OVERLAY_ENTER) {
          opacity = ((p - (OVERLAY_ENTER - FADE_RANGE)) / FADE_RANGE) * OVERLAY_MAX;
        } else if (p > OVERLAY_ENTER && p < OVERLAY_LEAVE) {
          opacity = OVERLAY_MAX;
        } else if (p >= OVERLAY_LEAVE && p <= OVERLAY_LEAVE + FADE_RANGE) {
          opacity = OVERLAY_MAX * (1 - (p - OVERLAY_LEAVE) / FADE_RANGE);
        }

        overlay.style.opacity = String(opacity);
      },
    });
  }

  // ──────────────────────────────────────────────
  // MARQUEE
  // ──────────────────────────────────────────────
  function initMarquee() {
    if (!marqueeWrap || !marqueeText) return;

    const speed = parseFloat(marqueeWrap.dataset.scrollSpeed) || -30;

    gsap.to(marqueeText, {
      xPercent: speed,
      ease: "none",
      scrollTrigger: {
        trigger: scrollCont,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    ScrollTrigger.create({
      trigger: scrollCont,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        let opacity = 0;

        if (p >= MARQUEE_ENTER && p <= MARQUEE_ENTER + FADE_RANGE * 2) {
          opacity = (p - MARQUEE_ENTER) / (FADE_RANGE * 2);
        } else if (p > MARQUEE_ENTER + FADE_RANGE * 2 && p < MARQUEE_LEAVE - FADE_RANGE * 2) {
          opacity = 1;
        } else if (p >= MARQUEE_LEAVE - FADE_RANGE * 2 && p <= MARQUEE_LEAVE) {
          opacity = 1 - (p - (MARQUEE_LEAVE - FADE_RANGE * 2)) / (FADE_RANGE * 2);
        }

        marqueeWrap.style.opacity = String(opacity);
      },
    });
  }

  // ──────────────────────────────────────────────
  // SECTION ANIMATIONS
  // ──────────────────────────────────────────────
  function buildTimeline(type, targets) {
    const tl = gsap.timeline({ paused: true });
    const ease = type === "clip-reveal" ? "power4.inOut"
               : type === "scale-up"   ? "power2.out"
               : "power3.out";
    const duration = type === "clip-reveal" ? 1.2 : type === "scale-up" ? 1.0 : 0.9;

    switch (type) {
      case "fade-up":
        tl.from(targets, { y: 50, opacity: 0, stagger: 0.12, duration, ease });
        break;
      case "slide-left":
        tl.from(targets, { x: -80, opacity: 0, stagger: 0.14, duration, ease });
        break;
      case "slide-right":
        tl.from(targets, { x: 80, opacity: 0, stagger: 0.14, duration, ease });
        break;
      case "scale-up":
        tl.from(targets, { scale: 0.85, opacity: 0, stagger: 0.12, duration, ease });
        break;
      case "rotate-in":
        tl.from(targets, { y: 40, rotation: 3, opacity: 0, stagger: 0.1, duration, ease });
        break;
      case "stagger-up":
        tl.from(targets, { y: 60, opacity: 0, stagger: 0.15, duration: 0.8, ease });
        break;
      case "clip-reveal":
        tl.from(targets, {
          clipPath: "inset(100% 0 0 0)",
          opacity: 0,
          stagger: 0.15,
          duration,
          ease,
        });
        break;
      default:
        tl.from(targets, { y: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease });
    }
    return tl;
  }

  function positionSection(section) {
    const enter = parseFloat(section.dataset.enter);
    const leave  = parseFloat(section.dataset.leave);
    const totalH = scrollCont.offsetHeight;
    const midPct = (enter + leave) / 2 / 100;
    const topPx  = midPct * totalH;

    section.style.position  = "absolute";
    section.style.top       = topPx + "px";
    section.style.transform = "translateY(-50%)";
    section.style.width     = "100%";
  }

  function initSections() {
    const sections = document.querySelectorAll(".scroll-section");

    sections.forEach((section) => {
      positionSection(section);

      const type    = section.dataset.animation || "fade-up";
      const persist = section.dataset.persist === "true";
      const enter   = parseFloat(section.dataset.enter) / 100;
      const leave   = parseFloat(section.dataset.leave)  / 100;

      const children = section.querySelectorAll(
        ".section-label, .section-heading, .section-body, .section-note, " +
        ".section-list, .cta-button, .stat, .cta-fine, .cta-buttons, .guarantee"
      );

      const tl = buildTimeline(type, Array.from(children));
      let isVisible = false;

      ScrollTrigger.create({
        trigger: scrollCont,
        start: "top top",
        end: "bottom bottom",
        scrub: false,
        onUpdate: (self) => {
          const p = self.progress;

          if (p >= enter && p <= leave) {
            if (!isVisible) {
              section.classList.add("visible");
              tl.restart();
              isVisible = true;
            }
          } else if (persist && p > leave) {
            // persist: stay visible, do nothing
          } else {
            if (isVisible) {
              section.classList.remove("visible");
              tl.pause(0);
              isVisible = false;
            }
          }
        },
      });
    });
  }

  // ──────────────────────────────────────────────
  // COUNTER ANIMATIONS
  // ──────────────────────────────────────────────
  function initCounters() {
    document.querySelectorAll(".stat-number").forEach((el) => {
      const target   = parseFloat(el.dataset.value);
      const decimals = parseInt(el.dataset.decimals || "0");

      gsap.from(el, {
        textContent: 0,
        duration: 2,
        ease: "power1.out",
        snap: { textContent: decimals === 0 ? 1 : 0.01 },
        scrollTrigger: {
          trigger: el.closest(".scroll-section"),
          start: "top 70%",
          toggleActions: "play none none reverse",
          onToggle: () => {
            // ensure parent is visible for counter to show
            el.closest(".scroll-section").classList.add("visible");
          },
        },
        onUpdate: function () {
          el.textContent =
            decimals === 0
              ? Math.round(this.targets()[0]._gsap.textContent)
              : parseFloat(this.targets()[0]._gsap.textContent).toFixed(decimals);
        },
      });
    });
  }

  // ──────────────────────────────────────────────
  // HERO WORD SPLIT ANIMATION
  // ──────────────────────────────────────────────
  function initHeroWords() {
    const words = document.querySelectorAll(".hero-heading .word");
    if (!words.length) return;

    gsap.from(words, {
      y: 40,
      opacity: 0,
      stagger: 0.08,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });

    gsap.from(".hero-tagline, .hero-cta, .scroll-indicator", {
      y: 20,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.8,
    });
  }

  // ──────────────────────────────────────────────
  // INIT APP (after all frames loaded)
  // ──────────────────────────────────────────────
  function initApp() {
    gsap.registerPlugin(ScrollTrigger);

    initLenis();
    initHeroWords();
    initFrameBinding();
    initHeroTransition();
    initDarkOverlay();
    initMarquee();
    initSections();
    initCounters();

    ScrollTrigger.refresh();
  }

  // ──────────────────────────────────────────────
  // BOOT
  // ──────────────────────────────────────────────
  preloadAllFrames(
    (loaded) => updateLoader(loaded),
    ()       => hideLoader()
  );

})();
