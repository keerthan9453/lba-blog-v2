import { Blog } from "@/types/Blog";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { useState, useEffect } from "react";

interface TrendingBlogProps {
  inputBlogs: Blog[];
}

function TrendingBlogs({ inputBlogs }: TrendingBlogProps) {
  const [blogs, setBlogs] = useState<Blog[]>(inputBlogs);

  useEffect(() => {
    setBlogs(inputBlogs);
  }, [inputBlogs]);

  return (
    <>
      {blogs.map((blog) => (
        <Link href={`/projects/${blog.slug}`} key={blog._id}>
          <div className="shadow-lg rounded dark:shadow-slate-600 dark:bg-[#1e1e1e] flex flex-col md:flex-row items-center my-10 mx-3">
            <div className="group cursor-pointer overflow-hidden p-5">
              {blog.image && (
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={200}
                  height={200}
                  className="flex rounded h-60 w-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                />
              )}
            </div>
            <div className="flex flex-col px-4">
              <p className="text-sm tracking-wider uppercase">
                Categories: {blog.categories.toString().replace(/,/g, ", ")}
              </p>
              <p>{blog.categories.description}</p>
              <p className="mt-4 md:mt-8">
                {moment(blog.publichedAt).format("MMM D")}
              </p>
              <p className="text-2xl md:text-5xl font-extrabold">
                {blog.title}
              </p>
              <p className="mt-1 text-sm uppercase font-extrabold">
                {blog.description}
              </p>
              <span className="uppercase font-extralight pb-5">
                By {blog.author.name}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default TrendingBlogs;
