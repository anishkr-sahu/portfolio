/**
 * terminal.ts
 * ─────────────────────────────────────────────────────────────
 * Payloads for the interactive Terminal window. Each entry is the
 * content printed by a command or a virtual file. Lines are shown
 * verbatim — an empty string renders as a blank line.
 * ─────────────────────────────────────────────────────────────
 */

export interface TerminalConfig {
  /** Content of `cat about.txt`. */
  about: string[]
  /** Content of `cat skills.txt`. */
  skills: string[]
  /** Content of `cat experience.txt`. */
  experience: string[]
  /** Content of `cat contact.txt`. */
  contact: string[]
  /** Content of `cat resume.pdf`. */
  resume: string[]
  /** Output of `whoami`. */
  whoami: string[]
  /** Fake JSON returned by `curl github.com/<user>`. */
  githubJson: string
}

export const terminal: TerminalConfig = {
  about: [
    "Name:   Anish Kumar",
    "Age:    22",
    "Base:   India",
    "Role:   AI Engineer",
    "",
     "Curious about Technology.",
    "Calm and Confident.",
  ],
  skills: [
    "Languages:  Python · SQL · C++",
    "ML/DL Frameworks:   PyTorch · TensorFlow · Keras · Scikit-learn · Huggingface · Transformers ",
    "GenAI/LLMs:    Langchain · Langraph · CrewAI · Prompt Engineering · RAG · OpenAI API",
    "Vector Databases:     PineCone · Chroma · FAISS",
    "Data & Tools:    Pandas · Numpy · Matplotlib · Jupyter · Git/Github · Flask · Streamlit",
    "Cloud & Deployments:    AWS · Docker · Kubernetes · MLFlow · CI/CD · FastAPI"
  ],
  experience: [
    // "Acme Corp    Jan 2024 – Present   Senior Software Engineer",
    // "Globex       2022 – 2023          Software Engineer",
    "Neo Skillz      Summer 2026         Intern",
  ],
  contact: [
    "email:    anishkr0098@gmail.com",
    "github:   https://github.com/anishkr-sahu",
    "twitter:  https://x.com/aneeshkr_",
    "cal:      cal.com/janedeveloper",
  ],
  resume: [
    "Opening résumé…",
    "→ example.com/resume",
  ],
  whoami: [
    "Anish Kumar",
    "AI Engineer · India",
    "",
    "Curious about Technology.",
    "Calm and Confident.",
  ],
  githubJson: `{"login":"anish-kr","name":"Anish Kumar","bio":"Software Engineer","public_repos":42}`,
}
