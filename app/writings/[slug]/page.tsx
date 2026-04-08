import { notFound } from "next/navigation";

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  description: string;
}

const posts: Record<string, Post> = {
  "building-scalable-apps": {
    slug: "building-scalable-apps",
    title: "Building Scalable Applications",
    date: "2024-09-01",
    description: "Thoughts on building scalable applications",
    content: `
      <p>
        Scaling a new application is rarely straightforward. Many of the
        architectural challenges we foresee do not manifest, while others
        blindside us. This article outlines some key principles on how to
        design web applications to be reasonably scalable from day one,
        without entering into premature optimization territory.
      </p>
      <p>
        One of the easiest ways to handle scaling is to decouple long
        processes using task queues. Caching data near the edge is also an
        incredible strategy. As I expand on these topics, I'll be sharing a
        sequence of technical deep dives into my own recent experiences.
      </p>
    `,
  },
  "first-post": {
    slug: "first-post",
    title: "First post",
    date: "2020-03-21",
    description: "Hello, I'm Thanh Dang. This is my first post using Hexo.",
    content: `
      <p>Hello, I'm Thanh Dang. This is my first post using Hexo.</p>
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  
  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-4">
      <header>
        <h1 className="text-[1.5rem] mb-4">{post.title}</h1>
        <div className="text-sm text-[#ccc] mb-4">
          <time dateTime={post.date}>{post.date}</time>
        </div>
      </header>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}