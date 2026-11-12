/**
 * links.ts
 * ─────────────────────────────────────────────────────────────
 * Curated external reading list shown in the LinksWidget on the
 * desktop. Each entry is an outbound link with a short tag used
 * for display only.
 * ─────────────────────────────────────────────────────────────
 */

export interface LinkItem {
  title: string
  author: string
  url: string
  /** Freeform short label displayed under the author (e.g. "rust"). */
  tag: string
}

export const links: LinkItem[] = [
  { title: "Automate the boring stuff with python",      author: "AI Sweigart",     url: "https://automatetheboringstuff.com/",                  tag: "Language" },
  { title: "Hand's on Machine Learning",   author: "AUtelian Geron",   url: "https://books.google.com/books?id=HHetDwAAQBAJ&printsec=frontcover", tag: "Mathematical tools" },
  { title: "Deep Learning",          author: "Ian GoodFellow",    url: "https://www.deeplearningbook.org/",                                   tag: "Mimic human brain" },
  { title: "Meditations",            author: "Marcus Aurelius", url: "https://www.gutenberg.org/ebooks/2680",                   tag: "philosophy" },
  { title: "Generative AI with langchain", author: "Ben Auffarth",     url: "https://github.com/benman1/generative_ai_with_langchain/blob/second_edition/README.md",                                  tag: "GenAI" },
]
