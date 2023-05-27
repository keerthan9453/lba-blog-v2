import { PortableTextBlock } from "sanity";

export type Blog = {
  _id: string;
  _createAt: Date;
  title: string;
  author: { name: string; image: string };
  publichedAt: string;
  description: string;
  slug: string;
  image: string;
  categories: string;
  content: PortableTextBlock[];
};
