# PaperGraph AI — Showcase 🔬

> Static landing page for presenting PaperGraph AI without running the backend.

**Live demo:** https://atharvaran.github.io/PaperGraphAI-showcase/

**Full project:** https://github.com/AtharvaRan/TEG-PJATK-PaperGraphAI

---

## What is PaperGraph AI?

A **GraphRAG** research assistant that lets you chat with your research papers. Upload PDFs, and the system builds a vector store + knowledge graph across all documents. Ask questions that span your entire library — answers are grounded in both semantic search and graph traversal.

### Key Features

- **Streaming chat** with source citations and strict paper-only guardrails
- **Resizable PDF viewer** side-by-side with chat
- **Multi-paper @mention** to scope queries to specific papers
- **On-demand knowledge graph** — build, stop, rebuild with live progress
- **Library manager** — upload, delete, search across papers
- **Insights dashboard** — live metrics on papers, chunks, tokens
- **Chat history** — last 10 conversations persisted locally

### Tech Stack

FastAPI · React 18 · TypeScript · LangGraph · GPT-4o · ChromaDB · NetworkX · Unstructured.io · Framer Motion · `react-force-graph-2d`

---

## About this repo

This is a **static build** of just the landing page, deployed via GitHub Pages. The full runnable project (backend + frontend) lives at [TEG-PJATK-PaperGraphAI](https://github.com/AtharvaRan/TEG-PJATK-PaperGraphAI).

### Deploy

```bash
npm install
npm run build
npm run deploy   # publishes dist/ to gh-pages branch
```

---

<p align="center">
  Built for the TEG PJATK thesis project
</p>
