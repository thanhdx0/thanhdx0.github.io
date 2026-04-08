import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { getAllPosts } from "@/lib/posts";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const projects = getAllProjects().slice(0, 3);

  return (
    <div className="flex flex-col gap-8">
      <section id="about">
        <p className="mb-4">
          Hi, I&apos;m Thanh Dang. I&apos;m a software engineer passionate about building
          scalable applications, learning new technologies, and sharing my
          experiences. Welcome to my personal website, where I write about
          software development and showcase my projects.
        </p>
        <p>
          Find me on{" "}
          <Link
            href="https://github.com/thanhdx0"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1"
          >
            <FaGithub /> GitHub
          </Link>
          ,{" "}
          <Link
            href="https://linkedin.com/in/thanhdang"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1"
          >
            <FaLinkedin /> LinkedIn
          </Link>{" "}
          and{" "}
          <Link
            href="mailto:thanhdang@example.com"
            className="inline-flex items-center gap-1"
          >
            <FaEnvelope /> Email
          </Link>
          .
        </p>
      </section>

      <section id="writing">
        <h1>
          <Link href="/writings">Writing</Link>
        </h1>
        <ul className="post-list list-none p-0">
          {posts.map((post) => (
            <li key={post.slug} className="flex gap-4 mb-1">
              <span className="text-[#666] min-w-[100px]">{post.date}</span>
              <span>
                <Link href={`/writings/${post.slug}`}>{post.title}</Link>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section id="projects">
        <h1>
          <Link href="/projects">Projects</Link>
        </h1>
        <ul className="post-list list-none p-0">
          {projects.map((project) => (
            <li key={project.slug} className="flex flex-col gap-2 mb-10">
              <span className="font-bold text-[1.2rem]">
                <Link href="/projects">{project.title}</Link>
              </span>
              <p className="m-0 text-[0.9rem] text-[#888]">
                {project.description}
              </p>
              {project.image && (
                <Link href="/projects">
                  <img
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    className="max-w-[280px] w-full rounded-md shadow-lg"
                  />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
