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
import MobileHamburgerSheet from "./components/Hamburger";
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
        <div>
          <MobileHamburgerSheet />
        </div>
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
          <CategoryTab updateSelectedCategory={updateSelectedCategory} />
        </div>

        <h2 className="my-6 font-bold text-gray-700 text-8xl">Trending Now</h2>

        {/* blog box section*/}
        <div className="mt-5 grid grid-cols-4">
          <div className="col-span-3">
            {/* display info from each blog */}
            <TrendingBlogs inputBlogs={blogs} />
          </div>
          <FeaturedSidebar />
        </div>
      </div>
    </>
  );
}
