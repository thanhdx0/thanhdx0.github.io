import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default function Projects() {
  const projects = getAllProjects();

  return (
    <article className="flex flex-col gap-8">
      <header>
        <h1 className="text-[1.5rem] mb-8">Projects</h1>
      </header>

      <div className="flex flex-col gap-12">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="flex flex-col gap-4 pb-8 border-b border-[#333]"
          >
            <h2>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener"
                className="hover:text-[#d480aa]"
              >
                {project.title}
              </Link>
            </h2>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full rounded-lg mb-6 shadow-lg"
              />
            )}
            <p>
              <strong>Description:</strong> {project.description}
            </p>
            {project.technologies.length > 0 && (
              <p>
                <strong>Technologies used:</strong> {project.technologies.join(", ")}.
              </p>
            )}
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
        ))}
      </div>
    </article>
  );
}