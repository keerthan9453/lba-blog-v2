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
    <div className="mt-5">
      <div className="flex flex-row overflow-y-auto">
        <div className="mr-3 rounded-lg bg-gray-300 text-md font-medium text-center text-gray-800">
          <button
            className="inline-block px-4 py-3 rounded-lg hover:text-black hover:bg-gray-400 "
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
            className="mr-3 rounded-lg bg-gray-300 text-md font-medium text-center text-gray-800"
          >
            <button
              className="inline-block px-4 py-3 rounded-lg hover:text-black hover:bg-gray-400 "
              onClick={() => {
                handleButtonClick(updateSelectedCategory, category.title);
              }}
            >
              {category.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
