import { getBlogs } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import FeaturedSidebar from "./components/FeaturedSidebar";
import CategoryTab from "./components/CategoryTab";
import TrendingBlogs from "./components/TrendingBlogs";

export default async function Home() {
  //get props and paths the blog and map the data to the page
  const blogs = await getBlogs();

  return (
    <>
      <div>
        {/* header section */}
        {/* replace this section with header component  */}
        <div className="">
          <h1 className="text-7xl font-extrabold">
            Hello this is{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              Lassonde Blockchain
            </span>
          </h1>

          <p className="mt-3 text-xl text-gray-600">
            Weclome everyone! Check out our blogs!
          </p>
        </div>
        <div>
          <CategoryTab />
        </div>

        <h2 className="my-6 font-bold text-gray-700 text-8xl">Trending Now</h2>

        {/* blog box section*/}
        <div className="mt-5 grid grid-cols-4">
          <div className="col-span-3">
            {/* display info from each blog */}
            <TrendingBlogs blogs={blogs} />
          </div>
          <FeaturedSidebar />
        </div>
      </div>
    </>
  );
}
