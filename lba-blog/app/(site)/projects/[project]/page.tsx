import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import moment from "moment";
import Image from "next/image";
import icon from "../../components/lib/headShot.jpg"

type Props = {
  params: { project: string };
};

export default async function Blog({ params }: Props) {
  const slug = params.project;
  const blog = await getBlog(slug);

  return (
    <div>
      <header>
        {/* Author + Date */}
        <div className="flex items-center justify-between">
          <h4>
            By {blog.author.name} -{" "}
            {moment(blog.publichedAt).format("MMM D, YYYY")}
          </h4>
        </div>

        {/* flex - side by side, justify-btw - left and right */}
        <div className="flex items-center justify-between">
          {/* left */}
          <h1 className=" text-5xl dropshadow font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent " style={{ marginTop: '5%' }}>
            {blog.title}
          </h1>
          {/* right */}
         
        </div>
      </header>

      {/* image section */}
      <div className="flex items-center justify-center h-screen/2 ">
        <Image
          src={blog.image}
          alt={blog.title}
          width={1000}
          height={800}
          // className="border-2 border-gray-700 object-cover rounded-xl"
        />
      </div>

      <div className="md:text-lg text-gray-500 mt-5 ml-4">
      <p className="text-gray-700 font-bold underline ml-4">
          {moment(blog.publichedAt).format("MMM D, YYYY")}
        </p>
  <div className="md:flex items-start">
    <div className="w-2/3 ml-4">
      <PortableText value={blog.content} />
    </div>
    <div className="md:w-1/5 ml-5 mr-10"style={{ marginTop: '1%' }} >
      <p className="text-xl uppercase font-bold text-gray900">A U T H O R ( S )</p>
      <div className="bg-gray-100 rounded-lg p-2">
        <div className="flex flex-col items-center">
          <div>
            <Image
              src={icon}
              alt={blog.author.name}
              width={80}
              height={80}
              className="rounded-full mb-5 mt-5"
            />
          </div>
          <div className="ml-2 text-center">
            <p className="text-lg uppercase font-extralight text-black mb-3">written by: {blog.author.name}</p>
            <p className="text-sm uppercase font-extralight text-black">
              some description dsiod jfijaodij faodifj oadij fopadi jfoadijf oaidjf oaidjfoj dfoaijd foj
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-xl uppercase font-bold text-gray-900">CATEGORIES</p>
        <div className="inline-block bg-gray-100 rounded-lg text-gray-500 font-bold py-5 px-4 whitespace-nowrap hover:bg-blue-900 hover:text-blue-200 transition">
            {blog.categories.toString()}
        </div>
      </div>
        </div>
  </div>
</div>
</div>

  );
}
