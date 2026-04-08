import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
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
          <li className="flex gap-4 mb-1">
            <span className="text-[#666] min-w-[100px]">2024-09-01</span>
            <span>
              <Link href="/writings/building-scalable-apps">
                Building Scalable Applications
              </Link>
            </span>
          </li>
          <li className="flex gap-4 mb-1">
            <span className="text-[#666] min-w-[100px]">2020-03-21</span>
            <span>
              <Link href="/writings/first-post">First post</Link>
            </span>
          </li>
        </ul>
      </section>

      <section id="projects">
        <h1>
          <Link href="/projects">Projects</Link>
        </h1>
        <ul className="post-list list-none p-0">
          <li className="flex flex-col gap-2 mb-10">
            <span className="font-bold text-[1.2rem]">
              <Link href="/projects">Sample App</Link>
            </span>
            <p className="m-0 text-[0.9rem] text-[#888]">
              A modern full-stack application with a responsive frontend and scalable
              backend.
            </p>
            <Link href="/projects">
              <img
                src="/images/sample.avif"
                alt="Sample App Screenshot"
                className="max-w-[280px] w-full rounded-md shadow-lg"
              />
            </Link>
          </li>
          <li className="flex flex-col gap-2 mb-10">
            <span className="font-bold text-[1.2rem]">
              <Link href="/projects">Portfolio Site Generator</Link>
            </span>
            <p className="m-0 text-[0.9rem] text-[#888]">
              A fast Python-based static site generator for developers.
            </p>
            <Link href="/projects">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Portfolio Site Screenshot"
                className="max-w-[280px] w-full rounded-md shadow-lg"
              />
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
