/**
 * projects.ts
 * ─────────────────────────────────────────────────────────────
 * All projects shown in the Projects window.
 * Split into two lists: `personal` (side projects) and `client`
 * (paid / contracted work). Both use the same ProjectItem shape.
 *
 *  - `tech`   → array of tags rendered beneath the description.
 *  - `stars`  → optional — shown next to the title if present.
 *  - `status` → optional — rendered as a pill (e.g. "Paused").
 * ─────────────────────────────────────────────────────────────
 */

export interface ProjectItem {
  title: string
  description: string
  tech: string[]
  status?: string
  stars?: number
  link: string
}

export interface ProjectsConfig {
  personal: ProjectItem[]
  client: ProjectItem[]
}

export const projects: ProjectsConfig = {
  personal: [
    {
      title: "Atlas Enterprise AI — Governed Knowledge Copilot",
      description: "Built a stateful conversational AI copilot using LangGraph, Amazon Bedrock (Nova Lite), and Pinecone with persistent conversation memory in PostgreSQL and automated S3 presigned-URL document ingestion.   Integrated application-level guardrails, a Human-in-the-Loop (HITL) admin approval queue for sensitive administrative requests, and end-to-end latency/error tracing using GlassFlow Rius.",
      tech: ["Python","LangGraph","PineCone","PostgreSql","Amazon Bedrock", "FastAPI","AWS S3","Docker"],
     // status: "Paused",
      link: "https://github.com/anishkr-sahu/Atlas-Enterprise-AI",
    },
    {
      title: "Chest Disease Classification",
      description: "Built an automated medical image classification system using TensorFlow and Flask, enabling real-time chest disease screening through a web interface.Orchestrated end-to-end pipeline versioning with DVC, tracked model metrics via MLflow, and established a GitHub Actions CI/CD pipeline to deploy Dockerized containers on AWS EC2.",
      tech: ["Python", "TensorFlow","DVC","MLFlow","Docker","AWS"],
      link: "https://github.com/anishkr-sahu/chest_disease",
    },
    {
      title: "US-Visa approval prediction ",
      description: "Developed a supervised classification model to automate visa eligibility screening, achieving 90% F1-score after applying SMOTEENN resampling and feature engineering on historical immigration data.Designed a fault-tolerant ML architecture featuring schema validation, MongoDB data connectors, and AWS S3 model pushing, reducing manual evaluation bottlenecks.",
      tech: ["Python", "Scikit-learn", "Mongodb","aws","Docker"],
      link: "https://github.com/anishkr-sahu/us-visa",
      //stars: ,
    },
    

  ],

  client: [
    // {
    //   title: "Client Work Sample",
    //   description: "Replace with a short, neutral description of client work you want to show off.",
    //   tech: ["React", "TailwindCSS"],
    //   link: "https://example.com",
    // },
  ],
}

/** Résumé-only condensed project highlights (short names + long descriptions). */
export interface ResumeProjectItem {
  name: string
  desc: string
}

export const resumeProjects: ResumeProjectItem[] = [
  {
    name: "Atlas Enterprise AI — Governed Knowledge Copilot",
    desc: "Built a stateful conversational AI copilot using LangGraph, Amazon Bedrock (Nova Lite), and Pinecone with persistent conversation memory in PostgreSQL and automated S3 presigned-URL document ingestion.   Integrated application-level guardrails, a Human-in-the-Loop (HITL) admin approval queue for sensitive administrative requests, and end-to-end latency/error tracing using GlassFlow Rius.",
  },
  {
    name: "Chest Disease Classification",
    desc: "Built an automated chest disease classification system using TensorFlow and Flask for real-time medical image screening via a web UI.Versioned data pipelines with DVC, tracked experiments via MLflow, and automated Docker deployments on AWS EC2 using GitHub Actions.",
  },
]
