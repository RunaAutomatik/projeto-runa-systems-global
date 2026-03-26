---
date: 2026-03-25
tags: [research, multi-agent, simulation, AI, tools]
project: runa-systems-global
source: https://github.com/666ghj/MiroFish
---

# MiroFish — Deep Study

## What Is It

MiroFish is a **swarm intelligence prediction engine** built on multi-agent technology. It simulates future outcomes by constructing high-fidelity "parallel digital worlds" populated by thousands of autonomous AI agents with distinct personalities, memories, and behavioral logic.

**Core premise:** Feed it real-world seed data (news, policy drafts, financial signals), and it simulates how entities (people, organizations, markets) will behave — producing structured forecasts and an interactive simulation you can interrogate.

**Backed by:** Shanda Group (盛大集团), Chinese tech conglomerate.

---

## Architecture Overview

```
Seed Data (news, policy, signals)
        ↓
  [Graph Construction]     — GraphRAG extracts entities + relationships
        ↓
  [Environment Setup]      — Generates agent personalities + ontology
        ↓
  [Parallel Simulation]    — OASIS engine runs Twitter + Reddit worlds concurrently
        ↓
  [Report Generation]      — ReportAgent produces structured analysis (ReACT pattern)
        ↓
  [Interactive Mode]       — User dialogues with simulated agents or ReportAgent
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Python 3.11–3.12, FastAPI |
| Frontend | Vue 3, Node.js 18+ |
| LLM | OpenAI SDK-compatible (Alibaba Qwen recommended) |
| Memory | Zep Cloud (graph-based agent memory) |
| Simulation Engine | OASIS (CAMEL-AI) |
| Deployment | Docker Compose |

---

## Core Components

### 1. Graph Builder (`graph_builder.py`)
Extracts seed data and constructs a knowledge graph. Uses GraphRAG to inject individual and collective memory into the simulation environment.

### 2. Ontology Generator (`ontology_generator.py`)
Creates semantic definitions for all entities in the simulation — what they are, how they relate, what they value.

### 3. OASIS Profile Generator (`oasis_profile_generator.py`)
Converts ontology + entities into OASIS-compatible agent profiles with personalities, memories, and behavioral parameters.

### 4. Simulation Runner (`simulation_runner.py`)
- Launches simulations as subprocess.Popen child processes
- Runs **dual-platform concurrent modeling**: Twitter + Reddit worlds simultaneously
- Monitors action logs in real-time (`actions.jsonl`)
- Tracks: CREATE_POST, LIKE_POST, and other social actions per agent
- Supports "interview" mode — query live agents via IPC without stopping simulation
- Maintains last 50 actions in memory + full historical log

### 5. Report Agent (`report_agent.py`)
LangChain-based ReACT agent that generates multi-chapter reports:

**Available tools:**
- `insight_forge` — Deep multi-dimensional search, decomposes into subquestions
- `panorama_search` — Broad overview with entity relationships + event evolution
- `quick_search` — Lightweight verification
- `interview_agents` — Conducts real-time interviews with simulated agents (Twitter/Reddit)

**Workflow:** Plan → Generate chapters → Assemble final markdown report

### 6. Zep Memory System (`zep_graph_memory_updater.py`, `zep_entity_reader.py`)
Manages persistent graph-based memory for agents. Updates as simulation progresses — agents remember past interactions.

---

## How to Run

### Docker (recommended)
```bash
# 1. Clone
git clone https://github.com/666ghj/MiroFish.git
cd MiroFish

# 2. Configure environment
cp .env.example .env
# Edit .env with your keys

# 3. Launch
docker compose up -d
```

### From Source
```bash
# Requirements: Node.js 18+, Python 3.11-3.12, uv
npm run setup:all
npm run dev
```

**Ports:**
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5001`

### Required Environment Variables
```env
LLM_API_KEY=your_openai_compatible_key
LLM_BASE_URL=https://api.example.com/v1
LLM_MODEL_NAME=qwen-plus
ZEP_API_KEY=your_zep_cloud_key
```

---

## Use Cases

### 1. Policy Simulation
Feed a draft policy document → simulate how different demographic groups, businesses, and media will react over time → forecast political and social outcomes before publishing.

### 2. Financial Forecasting
Inject financial signals (earnings reports, macro indicators) → simulate market participant behavior → generate probabilistic outcome reports.

### 3. Public Opinion Analysis
Feed social media seed data → simulate how opinion will spread across networks → identify tipping points and sentiment trajectories.

### 4. Competitive Intelligence
Simulate how competitors might react to a product launch, pricing change, or market entry.

### 5. Creative Sandbox
Use case from the README itself: "predict the ending of a lost novel" — simulate characters and let them evolve narratively.

### 6. Crisis Simulation
Simulate how an organization, market, or population responds to a crisis scenario before it happens.

---

## Key Differentiators

1. **Dual-platform simulation** — Twitter + Reddit worlds run in parallel, creating richer emergent behavior than single-network models
2. **Live agent interviews** — Query agents mid-simulation without stopping it (IPC bridge)
3. **Graph-based persistent memory** — Agents remember past interactions via Zep Cloud
4. **God's perspective injection** — User can inject variables dynamically during simulation
5. **Self-contained report generation** — ReportAgent has its own tool suite to produce structured forecasts

---

## Limitations / Considerations

- Requires **Zep Cloud** API key (paid service for agent memory)
- LLM costs can be high — thousands of agents × many rounds × context = significant token usage
- Recommended model is **Qwen** (Alibaba), suggesting optimization for Chinese-language scenarios
- OASIS engine simulates social networks specifically (Twitter/Reddit) — not general environments
- Python 3.11–3.12 only (strict version requirement)

---

## Relevance to Runa Systems

Potential applications:
- Simulate audience reaction to content/offers before publishing
- Test CTA frameworks (RECA/RALOCA/RADOVECA) against simulated personas
- Forecast how a product launch will land with specific demographics
- Use simulated "ideal client" agents to stress-test messaging

---

## References

- Repository: https://github.com/666ghj/MiroFish
- OASIS Engine: https://github.com/camel-ai/oasis
- Zep Cloud: https://www.getzep.com
- License: AGPL-3.0
