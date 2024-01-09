import { db } from "../utils/db.server";

const createBlog = async (blogData) => {
  return db.blog.create({
    data: blogData,
  });
};

const updateBlog = async (id, blogData) => {
  return db.blog.update({
    where: { id: Number(id) },
    data: blogData,
  });
};

const deleteBlog = async () => {
  return db.blog.delete({
    where: { id: Number(id), data: blogData },
  });
};

module.exports = { createBlog, updateBlog, deleteBlog };
