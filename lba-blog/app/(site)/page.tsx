"use client";
import {
  getBlogs,
  getFilterAIBlogs,
  getFilterMetaverseBlogs,
  getFilterBlockchainBlogs,
  getFilterMarketBlogs,
  getFilteredBlogs,
} from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import FeaturedSidebar from "./components/FeaturedSidebar";
import CategoryTab from "./components/CategoryTab";
import TrendingBlogs from "./components/TrendingBlogs";
import { useEffect, useState } from "react";
import React from "react";
import { Blog } from "@/types/Blog";

//var blogs: Blog[] = [];

export default function Home() {
  //get props and paths the blog and map the data to the page

  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const updateSelectedCategory = (newValue: string) => {
    if (selectedCategoryTitle === newValue) {
      setSelectedCategoryTitle("");
    } else {
      setSelectedCategoryTitle(newValue);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        if (selectedCategoryTitle === "") {
          var blogVal = await getBlogs();
          setBlogs(blogVal);
        } else if (selectedCategoryTitle === "AI/ML") {
          var blogVal = await getFilterAIBlogs();
          setBlogs(blogVal);
        } else if (selectedCategoryTitle === "Blockchain") {
          var blogVal = await getFilterBlockchainBlogs();
          setBlogs(blogVal);
        } else if (selectedCategoryTitle === "Mateverse") {
          var blogVal = await getFilterBlockchainBlogs();
          setBlogs(blogVal);
        } else if (selectedCategoryTitle === "Market") {
          var blogVal = await getFilterMarketBlogs();
          setBlogs(blogVal);
        } else {
          var blogVal = await getFilterMetaverseBlogs();
          setBlogs(blogVal);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [selectedCategoryTitle]);

  return (
    <>
      <div>
        {/* header section */}
        {/* replace this section with header component  */}
        <div className="">
        

          <p className="mt-3 text-xl text-gray-600">
            Weclome everyone! Check out our blogs!
          </p>
        </div>
        {/* <h2 className="my-6 font-bold text-gray-700 text-5xl mt-10 ">Blogs.</h2> */}
        <div>
          <CategoryTab updateSelectedCategory={updateSelectedCategory} />

        </div>

        <h2 className="my-6 font-bold text-gray-700 text-8xl">Blogs.</h2>

        {/* blog box section*/}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-4">
            <div className=" col-span-5 md:col-span-3">
              {/* display info from each blog */}
              <TrendingBlogs blogs={blogs} />
            </div>
            <FeaturedSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
