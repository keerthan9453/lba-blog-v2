"use client";

interface SmallBlogProps {
  title?: string;
  date?: string;
  author?: string;
  content?: string;
}

const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate \
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
occaecat cupidatat non proident, sunt in culpa qui officia deserunt \
mollit anim id est laborum.";

export default function SmallBlogCard({
  title = "Title of Article Goes Here",
  date = "Date Goes Here",
  author = "Author Goes Here",
  content = defaultContent,
}: SmallBlogProps) {
  return (
    <div className="flex flex-col w-96 my-2">
      <div className=" bg-slate-500  aspect-video" />
      {/* Replace with IMG later */}
      <h1 className="mt-2 text-lg font-semibold">{title}</h1>
      <h2 className="mt-1 text-sm line-clamp-4">{content}</h2>
      <div className="flex mt-2 items-center">
        <img
          src="/avatar.jpg"
          alt="/logo.png"
          className="h-6 w-6 rounded-full"
        />
        <h2 className="text-xs">{author}</h2>
        <span className="mx-2 h-1 w-1 rounded-full bg-white" />
        <h2 className="text-xs">{date}</h2>
      </div>
    </div>
  );
}
