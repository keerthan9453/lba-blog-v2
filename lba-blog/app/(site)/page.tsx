import { getBlogs } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/footer";
import moment from "moment";

export default async function Home() {
  //get props and paths the blog and map the data to the page
  const blogs = await getBlogs();

  return (
    <>
      <div>
        {/* header section */}
        <h1 className="text-7xl font-extrabold">
          Hello this is{" "}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            Lassonde Blockchain
          </span>
        </h1>

        <p className="mt-3 text-xl text-gray-600">
          Weclome everyone! Check out our blogs!
        </p>

        <h2 className="mt-24 font-bold text-gray-700 text-3xl">Blogs</h2>

        {/* blog box section*/}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 md:p-6">
          {/* display info from each blog */}
          {blogs.map((blog) => (
            <Link
              href={`/projects/${blog.slug}`}
              key={blog._id}
              // className="border-2 border-gray-500 rounded-lg p-1 "
            >
              <div className=" border rounded-lg group cursor-pointer overflow-hidden">
                {blog.image && (
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={750}
                    height={300}
                    // className="object-cover rounded-lg border border-gray-500"
                    className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                  />
                )}
                <header className="flex items-center justify-between">
                  <div className="mt-2 mx-2 font-extralight">
                    {moment(blog.publichedAt).format("MMM Do, YYYY")}
                  </div>
                  <div className="mt-2 mx-2 font-extralight">
                    {blog.author.name}{" "}
                  </div>
                </header>
                <header className="flex items-center justify-between">
                  <div className="mx-2 text-2xl font-extrabold">
                    {blog.title}
                  </div>
                  {blog.author.image && (
                    <Image
                      src={blog.author.image}
                      alt={blog.author.name}
                      className="mx-2 h-12 w-12 counded-full"
                    />
                  )}
                </header>
                <p className="mx-2 text-xl font-extralight">
                  {blog.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        {/* footer section */}
        <Footer />
      </div>
    </>
  );
}
