import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Sample App",
      description:
        "A modern full-stack application built to solve real-world problems. Includes a responsive frontend and a scalable backend API.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      content: `This project was created to demonstrate how to efficiently handle large amounts of data in a responsive web application environment. The frontend uses highly optimized data-fetching patterns, and the backend relies on an intelligent caching layer using Redis.`,
      link: "https://github.com/thanhdx0/sample-project",
      image: "/images/sample.avif",
    },
    {
      title: "Portfolio Site Generator",
      description:
        "A static site generator aiming to help developers easily craft and deploy beautiful portfolios quickly.",
      technologies: ["Python", "Markdown", "Jinja2"],
      content: `By heavily parsing Markdown files and processing YAML frontmatter, this generator statically builds fully responsive HTML within milliseconds. It includes features like SEO optimization tags, RSS feed generation, and integrated sitemaps.`,
      link: "#",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <article className="flex flex-col gap-8">
      <header>
        <h1 className="text-[1.5rem] mb-8">Projects</h1>
      </header>

      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
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
            <img
              src={project.image}
              alt={project.title}
              className="max-w-full rounded-lg mb-6 shadow-lg"
            />
            <p>
              <strong>Description:</strong> {project.description}
            </p>
            <p>
              <strong>Technologies used:</strong> {project.technologies.join(", ")}.
            </p>
            <p>{project.content}</p>
          </div>
        ))}
      </div>
    </article>
  );
}