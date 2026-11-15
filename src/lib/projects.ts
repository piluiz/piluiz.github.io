import { getCollection, type CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">;

/** All published projects, newest first. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection("projects", (p) => !p.data.draft);
  return all.sort((a, b) => b.data.sort - a.data.sort);
}

/** "Fall 2020 - Spring 2021" -> "2021"; "2022 - 2023" -> "2023" */
export function yearOf(p: Project): string {
  return String(Math.floor(p.data.sort));
}

/** Escape HTML, then turn [text](url) into links. Used for the dek in frontmatter. */
export function inlineMarkdown(s: string): string {
  const esc = s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  return esc.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, text, url) => {
    const external = /^https?:/.test(url);
    return `<a href="${url}"${external ? ' target="_blank" rel="noopener"' : ""}>${text}</a>`;
  });
}
