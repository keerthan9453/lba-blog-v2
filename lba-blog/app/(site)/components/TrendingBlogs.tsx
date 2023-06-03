import { Blog } from "@/types/Blog";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

interface TrendingBlogProps {
  blogs: Blog[];
}

function TrendingBlogs({ blogs }: TrendingBlogProps) {
  return (
    <>
      {blogs.map((blog) => (
        <Link
          href={`/projects/${blog.slug}`}
          key={blog._id}
          // className="border-2 border-gray-500 rounded-lg p-1 "
        >
          <div className="shadow-lg flex items-center my-5 mr-3">
            <div className=" group cursor-pointer overflow-hidden p-5 ">
              {blog.image && (
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={200}
                  height={200}
                  // className="object-cover rounded-lg border border-gray-500"
                  className=" flex h-60 w-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                />
              )}
            </div>
            <div className="flex flex-col px-4">
              <p className=" text-sm tracking-wider uppercase">
                Categories: {blog.categories.toString()}
              </p>
              <p>{blog.categories.description}</p>
              <p className="mt-8">{moment(blog.publichedAt).format("MMM D")}</p>
              <p className="text-5xl font-extrabold">{blog.title}</p>
              {/* {blog.author && (
                <Image
                  src={blog.author.image}
                  alt={blog.author.name}
                  className="mx-2 h-12 w-12 counded-full"
                />
              )} */}
              <p className="mt-1 text-sm uppercase font-extrabold">
                {blog.description}
              </p>
              <span className="uppercase font-extralight">
                By {blog.author.name}{" "}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default TrendingBlogs;
