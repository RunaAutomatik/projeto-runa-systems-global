import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";

// Load env from .env.local — this script runs outside Next.js
function loadEnv() {
  const envPath = path.join(__dirname, "../.env.local");
  const raw = fs.readFileSync(envPath, "utf-8");
  const vars: Record<string, string> = {};
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    vars[trimmed.slice(0, eq)] = trimmed.slice(eq + 1);
  }
  return vars;
}

const env = loadEnv();

const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL!,
  env.SUPABASE_SERVICE_ROLE_KEY!, // bypasses RLS
);

// Lucas Pesto's Clerk user ID — update after he creates his account
const LUCAS_CLERK_ID =
  env.LUCAS_PESTO_CLERK_USER_ID ?? "placeholder_lucas_pesto";
const LUCAS_EMAIL = env.LUCAS_PESTO_EMAIL ?? "lucas@pesto.com";

const MENTEE_SLUG = "lucas-pesto";

const sessions = [
  {
    session_number: 1,
    title: "Diagnóstico e Mapeamento",
    session_date: "2026-04-11",
    bunny_video_id: null,
    duration_minutes: 90,
    summary: "Four Cs assessment, intake, primeira sessão",
  },
  {
    session_number: 2,
    title: "Sistemas de Operação",
    session_date: "2026-04-21",
    bunny_video_id: null,
    duration_minutes: 90,
    summary: "Claude AI chat mode, workflows básicos",
  },
  {
    session_number: 3,
    title: "Agentes Neurais — Fundamentos",
    session_date: "2026-04-22",
    bunny_video_id: null,
    duration_minutes: 90,
    summary: "Primeiro agente configurado",
  },
  {
    session_number: 4,
    title: "Stack Técnica e Ferramentas",
    session_date: "2026-04-22",
    bunny_video_id: null,
    duration_minutes: 90,
    summary: "Claude Code, Anti-gravity, MCP setup",
  },
  {
    session_number: 5,
    title: "CEO Neural",
    session_date: "2026-04-27",
    bunny_video_id: null,
    duration_minutes: 90,
    summary: "Decisões estratégicas com IA",
  },
  {
    session_number: 6,
    title: "Copy e Comercial Neural",
    session_date: "2026-04-29",
    bunny_video_id: null,
    duration_minutes: 90,
    summary: "Textos de vendas, automações",
  },
  {
    session_number: 7,
    title: "Designer e Conteúdo Neural",
    session_date: "2026-05-06",
    bunny_video_id: null,
    duration_minutes: 90,
    summary: "Pipeline de conteúdo, FREYJA intro",
  },
  {
    session_number: 8,
    title: "Financeiro e Projetos Neural",
    session_date: "2026-05-07",
    bunny_video_id: null,
    duration_minutes: 90,
    summary: "Orçamentos, gestão de projetos",
  },
  {
    session_number: 9,
    title: "Revisão e Próximos Passos",
    session_date: "2026-05-12",
    bunny_video_id: null,
    duration_minutes: 90,
    summary: "Retrospectiva, roadmap semanas 4–7",
  },
];

// Deterministic UUIDs for idempotent deliverable upserts
const deliverables = [
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    title: "Fix NotebookLM MCP — autenticação expirada",
    type: "doc" as const,
    session_id: null, // pre-session deliverable, no session link
    description:
      "Guia de reautenticação do NotebookLM MCP após expiração de sessão",
    file_url: null,
  },
];

async function seed() {
  console.log("--- Seed: Lucas Pesto ---");

  // 1. Profile upsert
  const { error: profileError } = await supabase.from("profiles").upsert(
    {
      id: LUCAS_CLERK_ID,
      full_name: "Lucas Pesto",
      email: LUCAS_EMAIL,
      tier: "mentee",
      mentee_slug: MENTEE_SLUG,
    },
    { onConflict: "id" },
  );

  if (profileError)
    throw new Error(`Profile upsert failed: ${profileError.message}`);
  console.log(`✓ Profile: ${LUCAS_CLERK_ID} (${MENTEE_SLUG})`);

  // 2. Sessions upsert
  const sessionRows = sessions.map((s) => ({
    ...s,
    mentee_id: LUCAS_CLERK_ID,
  }));

  const { error: sessionsError } = await supabase
    .from("sessions")
    .upsert(sessionRows, { onConflict: "mentee_id,session_number" });

  if (sessionsError)
    throw new Error(`Sessions upsert failed: ${sessionsError.message}`);

  for (const s of sessions) {
    console.log(
      `✓ Session S${String(s.session_number).padStart(2, "0")}: ${s.title} (${s.session_date})`,
    );
  }

  // 3. Deliverables upsert
  const deliverableRows = deliverables.map((d) => ({
    ...d,
    mentee_id: LUCAS_CLERK_ID,
  }));

  const { error: deliverablesError } = await supabase
    .from("deliverables")
    .upsert(deliverableRows, { onConflict: "id" });

  if (deliverablesError)
    throw new Error(`Deliverables upsert failed: ${deliverablesError.message}`);

  for (const d of deliverables) {
    console.log(`✓ Deliverable: ${d.title}`);
  }

  console.log(
    `\n✅ ${sessions.length} sessions upserted, ${deliverables.length} deliverables upserted`,
  );

  if (LUCAS_CLERK_ID === "placeholder_lucas_pesto") {
    console.log(
      "\n⚠️  LUCAS_PESTO_CLERK_USER_ID not set — profile uses placeholder ID.",
    );
    console.log(
      "   Set it in .env.local and re-run after Lucas creates his Clerk account.",
    );
  }
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
