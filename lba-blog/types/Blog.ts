import { PortableTextBlock } from "sanity";

export type Blog = {
  _id: string;
  _createAt: Date;
  title: string;
  author: { name: string; image: string };
  categories: { title: string; description: string };
  publichedAt: string;
  description: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
};
