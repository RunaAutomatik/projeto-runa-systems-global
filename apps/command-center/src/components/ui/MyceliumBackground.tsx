'use client'
export function MyceliumBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cosmic radial gradient */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 30% 20%, #0A1F2E 0%, #050D1A 55%, #020810 100%)'
      }} />

      {/* Mycelium SVG network */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
        style={{ animation: 'mycelium-pulse 8s ease-in-out infinite' }}
      >
        <defs>
          <filter id="myc-glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Primary mycelium threads */}
        {[
          { d: "M-50,280 C150,120 380,420 620,260 C860,100 1050,380 1280,200 C1420,100 1500,260 1560,180", delay: "0s", dur: "14s" },
          { d: "M0,520 C200,380 420,600 660,440 C900,280 1120,520 1340,360 C1480,260 1520,420 1580,340", delay: "2s", dur: "16s" },
          { d: "M80,720 C280,560 520,740 760,580 C1000,420 1220,660 1440,500", delay: "4s", dur: "12s" },
          { d: "M-80,160 C100,320 320,140 540,300 C760,460 980,220 1200,400 C1380,540 1460,340 1560,480", delay: "1s", dur: "18s" },
          { d: "M200,820 C420,660 640,840 860,680 C1080,520 1300,760 1500,620", delay: "3s", dur: "15s" },
          { d: "M50,80 C240,220 460,60 680,200 C900,340 1120,120 1340,280 C1500,400 1560,220 1620,360", delay: "5s", dur: "13s" },
          { d: "M-20,420 C180,300 360,480 580,340 C800,200 1000,440 1220,300 C1400,180 1480,340 1540,260", delay: "0.5s", dur: "20s" },
          { d: "M120,640 C320,500 540,680 760,540 C980,400 1200,620 1400,480", delay: "2.5s", dur: "17s" },
        ].map((path, i) => (
          <path
            key={i}
            d={path.d}
            stroke="#F59E0B"
            strokeWidth="0.7"
            fill="none"
            opacity="0"
            filter="url(#myc-glow)"
          >
            <animate attributeName="opacity" values="0;0.12;0.06;0.12;0" dur={path.dur} begin={path.delay} repeatCount="indefinite" />
            <animate attributeName="stroke-dasharray" values="0,2000;2000,0" dur={path.dur} begin={path.delay} repeatCount="indefinite" />
          </path>
        ))}

        {/* Gold secondary threads */}
        {[
          { d: "M300,350 C480,240 660,400 840,290 C1020,180 1200,360 1380,250", delay: "6s", dur: "19s" },
          { d: "M180,580 C360,460 540,620 720,500 C900,380 1080,560 1260,440", delay: "1.5s", dur: "22s" },
        ].map((path, i) => (
          <path
            key={`g-${i}`}
            d={path.d}
            stroke="#FFD166"
            strokeWidth="0.4"
            fill="none"
            opacity="0"
          >
            <animate attributeName="opacity" values="0;0.07;0.03;0.07;0" dur={path.dur} begin={path.delay} repeatCount="indefinite" />
          </path>
        ))}

        {/* Network nodes */}
        {[
          { cx: 620, cy: 260 }, { cx: 1050, cy: 380 }, { cx: 540, cy: 300 },
          { cx: 980, cy: 220 }, { cx: 760, cy: 580 }, { cx: 1200, cy: 300 },
          { cx: 380, cy: 420 }, { cx: 840, cy: 290 }, { cx: 660, cy: 440 },
        ].map((node, i) => (
          <circle key={`n-${i}`} cx={node.cx} cy={node.cy} r="2.5" fill="#F59E0B" opacity="0">
            <animate
              attributeName="opacity"
              values="0;0.25;0.1;0.25;0"
              dur={`${10 + i * 2}s`}
              begin={`${i * 0.8}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      {/* Vignette */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(2,8,16,0.6) 100%)'
      }} />
    </div>
  )
}
