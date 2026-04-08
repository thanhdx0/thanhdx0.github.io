import Link from "next/link";

export default function Writings() {
  const posts = [
    {
      slug: "building-scalable-apps",
      title: "Building Scalable Applications",
      date: "2024-09-01",
      description: "Thoughts on building scalable applications",
    },
    {
      slug: "first-post",
      title: "First post",
      date: "2020-03-21",
      description: "Hello, I'm Thanh Dang. This is my first post using Hexo.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[1.5rem] mb-4">Writing</h1>
      
      <ul className="post-list list-none p-0">
        <h2 className="text-base font-bold mb-2">2024</h2>
        {posts
          .filter((p) => p.date.startsWith("2024"))
          .map((post) => (
            <li key={post.slug} className="flex gap-4 mb-1">
              <span className="text-[#666] min-w-[100px]">{post.date}</span>
              <span>
                <Link href={`/writings/${post.slug}`}>{post.title}</Link>
              </span>
            </li>
          ))}
        
        <h2 className="text-base font-bold mb-2 mt-4">2020</h2>
        {posts
          .filter((p) => p.date.startsWith("2020"))
          .map((post) => (
            <li key={post.slug} className="flex gap-4 mb-1">
              <span className="text-[#666] min-w-[100px]">{post.date}</span>
              <span>
                <Link href={`/writings/${post.slug}`}>{post.title}</Link>
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}