"use client";
import SmallBlogCard from "../components/SmallBlogCard";

const defaultCategoryTitle = "AI / Machine Learning";
const defaultCategoryDescription =
  "With the rise of tools such as ChatGPT, AI and Machine Learning has \
crossed over Blockchain technology. Lorem ipsum dolor sit amet, \
consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \
labore et dolore magna aliqua.";

interface SmallBlog {
  title: string;
  date: string;
  author: string;
  content: string;
}

const exampleBlog: SmallBlog = {
  title: "Title of Article Goes Here",
  date: "Date Goes Here",
  author: "Author Goes Here",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate \
  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
  occaecat cupidatat non proident, sunt in culpa qui officia deserunt \
  mollit anim id est laborum.",
};

var exampleBlogs = new Array(10);
exampleBlogs.fill(exampleBlog);

export default function CategoryPage() {
  return (
    <div className="h-full w-full p-16 pt-20">
      <div className="my-32 w-8/12">
        <h1 className="text-6xl font-semibold">{defaultCategoryTitle}</h1>
        <p className="m-2 mt-5 w-6/12">{defaultCategoryDescription}</p>
      </div>
      <div className="grid grid-cols-3 gap-4 justify-center items-center">
        {exampleBlogs.map((blog, index) => Blog(blog, index))}
      </div>
    </div>
  );
}

function Blog(blog: SmallBlog, index: number) {
  var blogClassName: string;
  if (index % 3 == 0) {
    blogClassName = "justify-start";
  } else if (index % 3 == 1) {
    blogClassName = "justify-center";
  } else {
    blogClassName = "justify-end";
  }
  return (
    <div className={`flex ${blogClassName}`}>
      <SmallBlogCard
        title={blog.title}
        date={blog.date}
        author={blog.author}
        content={blog.content}
      />
    </div>
  );
}
