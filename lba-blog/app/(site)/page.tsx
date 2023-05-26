import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  //get props and paths the project and map the data to the page
  const projects = await getProjects();

  return (
    <div>
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

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <header className="flex items-center justify-between">
              <div className="mt-2 mx-2 font-extralight">{project.date}</div>
              <div className="mt-2 mx-2 font-extralight">{project.author} </div>
            </header>
            <div className="mx-2 text-2xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
