/**
 * skills.ts
 * ─────────────────────────────────────────────────────────────
 * Skills grouped by category. Keys become category labels on the
 * left; values become the chip list on the right.
 *
 * Add, remove, or rename categories freely — the Résumé section
 * iterates over Object.entries(skills), so the UI adapts.
 * ─────────────────────────────────────────────────────────────
 */

export type Skills = Record<string, string[]>

export const skills: Skills = {
  "Languages":         ["Python", "SQL", "C++"],
  "ML/DL Frameworks":          ["PyTorch", "Tensorflow", "Keras", "Scikit-learn","Huggingface","Transformers"],
  "GenAI/LLMs":           ["Langchain", "Langraph", "CrewAI", "Prompt Engineering","RAG","OpenAI API"],
  "Vector Databases":  ["PineCone", "Chroma", "FAISS"],
  "Data & Tools":     ["Pandas", "Numpy","Matplotlib","Jupyter","Git/Github","Flask","Streamlit"],
  "Cloud & Deployments":   ["AWS","Docker","Kubernetes","MLFlow","CI/CD","FastAPI"]
}
