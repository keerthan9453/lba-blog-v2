
import React, { useEffect } from "react";
import {
  getCategories,
  getFilterAIBlogs,
  getFilterBlockchainBlogs,
} from "@/sanity/sanity-utils";
import Link from "next/link";
import { Category } from "@/types/Category";

type Props = {
  updateSelectedCategory: (newValue: string) => void;
};

var categories: Category[] = [];
var categoryList;

export default function CategoryTab({ updateSelectedCategory }: Props) {
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        categories = await getCategories();
        // categoryList = await getFilterAIBlogs();
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleButtonClick = (
    updateSelectedCategory: (newValue: string) => void,
    newValue: string
  ) => {
    updateSelectedCategory(newValue);
  };

  return (
    //CSS reference
    {/*     <div className="mt-5 flex flex-wrap justify-center lg:justify-start">
      {categories.map((category) => (
        <Link href={`/categories/${category.title}`} key={category._id}>
          <div className="m-2 rounded-lg bg-gray-100 text-md font-medium text-center text-gray-500 dark:text-gray-400">
            <div className="px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
              {category.title}
            </div>
          </div>
        </Link>
      ))} */}
    
    <div className=" mt-5">
      <div className="flex flex-row ">
        <>
          <div className="mr-3 rounded-lg bg-gray-100 text-md font-medium text-center text-gray-500 dark:text-gray-400">
            <button
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => {
                handleButtonClick(updateSelectedCategory, "");
              }}
            >
              All
            </button>
          </div>

          {/* display info from each blog */}
          {categories.map((category) => (
            <div
              key={category.title}
              className="mr-3 rounded-lg bg-gray-100 text-md font-medium text-center text-gray-500 dark:text-gray-400"
            >
              <button
                className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => {
                  handleButtonClick(updateSelectedCategory, category.title);
                }}
              >
                {category.title}
              </button>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}
