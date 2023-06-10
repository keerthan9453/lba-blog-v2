import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import moment from "moment";
import Image from "next/image";
import icon from "../../components/lib/headShot.jpg"
import { Roboto_Slab } from "next/font/google";

type Props = {
  params: { project: string };
};

// font import
const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default async function Blog({ params }: Props) {
  const slug = params.project;
  const blog = await getBlog(slug);

  return (

    // <div className={roboto_slab.className}>
    //   <header>
    //     {/* Author + Date */}
    //     <div className="flex items-center justify-between">
    //       <h4>
    //         By {blog.author.name} -{" "}
    <div className={roboto_slab.className}>
      {/* header section */}
      <div className="container mb-20 mx-auto py-auto sm:px-4">
        <header className="mt-32">
          <div className="md:flex items-center justify-between">
            {/* left */}
            <h1
              className=" text-5xl dropshadow font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent "
              style={{ marginTop: "5%" }}
            >
              {blog.title}
            </h1>
            {/* right */}
            {/* image section */}
            <div className="flex items-center justify-center h-screen/2 ">
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={600}
                // className="border-2 border-gray-700 object-cover rounded-xl"
              />
            </div>
            <div></div>
          </div>
        </header>

        {/* body */}
        <div className="md:text-lg text-gray-500 mt-5">
          {/* content */}
          <p className="text-gray-700 font-bold underline">
            {moment(blog.publichedAt).format("MMM D, YYYY")}
          </p>
          <div className="mt-5 md:flex items-start">
            <div className="lg:w-2/3 md:w-full">
              <PortableText value={blog.content} />
            </div>
            {/* author  */}
            <div className="lg:ml-10 md:w-1/5 mr-5" style={{ marginTop: "1%" }}>
              <p className="text-xl uppercase font-bold text-gray900 tracking-wider">
                Author(s)
              </p>
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
                  <div className="text-center">
                    <p className="text-lg uppercase font-extralight text-black mb-3">
                      written by: {blog.author.name}
                    </p>
                    <p className="text-sm uppercase font-extralight text-black">
                      some description dsiod jfijaodij faodifj oadij fopadi
                      jfoadijf oaidjf oaidjfoj dfoaijd foj
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-xl uppercase font-bold text-gray900 tracking-wider">
                  Categories
                </p>
                <div className=" p-2 inline-block bg-gray-100 rounded-lg text-gray-500 font-bold py-5 px-4 whitespace-nowrap hover:bg-blue-900 hover:text-blue-200 transition">
                  {blog.categories.toString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* flex - side by side, justify-btw - left and right
        <div className="flex items-center justify-between">
          {/* left }
          <h1 className="text-5xl dropshadow font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent " style={{ marginTop: '5%' }}>
            {blog.title}
          </h1>
          {/* right }

        </div>
      </header>

      {/* image section }
      <div className="border-4">
        <div className="flex items-center justify-center h-screen/2 ">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1000}
            height={800}
          // className="border-2 border-gray-700 object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="md:text-lg text-gray-500 mt-5 ml-4">
        <p className="text-gray-700 font-bold underline ml-4">
          {moment(blog.publichedAt).format("MMM D, YYYY")}
        </p>
        <div className="md:flex items-start">
          <div className="w-2/3 ml-4">
            <PortableText value={blog.content} />
          </div>
          <div className="md:w-1/5 ml-20 mr-5" style={{ marginTop: '1%' }} >
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
    </div> */}

      </div>
    </div>
  );
}
