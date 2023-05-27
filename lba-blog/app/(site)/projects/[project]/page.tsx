import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import moment from "moment";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    // 1h:30min
    <div>
      {/* Author + Date */}
      <h4>
        {project.author} - {moment(project.date).format('MMM Do, YYYY')}
      </h4>

      {/* flex - side by side, justify-btw - left and right */}
      <header className="flex items-center justify-between">
        
        {/* left */}
        <h1 className=" text-5xl dropshadow font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {project.name}
        </h1>
        {/* right */}
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-5 px-4 whitespace-nowrap hover:bg-blue-900 hover:text-blue-200 transition"
        >
          View Blogs
        </a>
      </header>
      {/* image sction */}
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1000}
        className="mt-10 border-2 border-gray-700 object-cover ronuded-xl"
      />

      {/* content section */}
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>
    </div>
  );
}
