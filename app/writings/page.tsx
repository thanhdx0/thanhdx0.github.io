import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Writings() {
  const posts = getAllPosts();

  const postsByYear = posts.reduce((acc, post) => {
    const year = post.date.split("-")[0];
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {} as Record<string, typeof posts>);

  const years = Object.keys(postsByYear).sort().reverse();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[1.5rem] mb-4">Writing</h1>
      
      <ul className="post-list list-none p-0">
        {years.map((year) => (
          <div key={year}>
            <h2 className="text-base font-bold mb-2">{year}</h2>
            {postsByYear[year].map((post) => (
              <li key={post.slug} className="flex gap-4 mb-1">
                <span className="text-[#666] min-w-[100px]">{post.date}</span>
                <span>
                  <Link href={`/writings/${post.slug}`}>{post.title}</Link>
                </span>
              </li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
}