import { readFile } from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import type { ProjectSlug } from "@/content/projects/projectsData";

export type MarkdownDocument = {
  frontmatter: Record<string, unknown>;
  html: string;
};

export async function parseMarkdown(markdown: string): Promise<MarkdownDocument> {
  const { data, content } = matter(markdown);
  const processed = await remark().use(html).process(content);

  return {
    frontmatter: data,
    html: processed.toString(),
  };
}

const contentRoot = path.join(process.cwd(), "content");

export async function loadProjectMarkdown(slug: ProjectSlug) {
  const filePath = path.join(contentRoot, "projects", `${slug}.md`);
  const file = await readFile(filePath, "utf8");
  return parseMarkdown(file);
}





