import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "data/projects");

export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  content: string;
}

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug: string): Project {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    description: data.description,
    technologies: data.technologies || [],
    link: data.link || "#",
    image: data.image || "",
    content,
  };
}

export async function getProjectBySlugWithContent(slug: string): Promise<Project> {
  const project = getProjectBySlug(slug);
  const processedContent = await remark().use(html).process(project.content);
  project.content = processedContent.toString();
  return project;
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  const projects = slugs.map((slug) => getProjectBySlug(slug));
  return projects;
}
