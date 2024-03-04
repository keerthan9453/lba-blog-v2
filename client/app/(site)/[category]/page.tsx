"use client";

import SmallBlogCard from "../components/SmallBlogCard";

export default function CategoryPage() {
  return (
    <div className="h-full w-full p-16 pt-20">
      <div className="mt-10 w-8/12">
        <h1 className="text-6xl font-semibold">AI / Machine Learning</h1>
        <p className="m-2 mt-5 w-6/12">
          With the rise of tools such as ChatGPT, AI and Machine Learning has
          crossed over Blockchain technology. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.{" "}
        </p>
      </div>
      <div className="mt-28 grid grid-cols-3 gap-4 justify-center items-center">
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
        <SmallBlogCard />
      </div>
    </div>
  );
}
