import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";

export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.md$/, "") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.description,
    };
  } catch {
    return { title: "Not Found" };
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

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
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}