import { Blog } from "@/types/Blog";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

// fetching the data from sanity
//  data for home page
export async function getBlogs(): Promise<Blog[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            title,
            description,
            author -> {name, image},
            publichedAt,
            "slug": slug.current,
            "image": image.asset->url,
            categories,
            content
        }`
  );
}
//  data for individual blog page
export async function getBlog(slug: string): Promise<Blog> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            description,
            author -> {name, image},
            publichedAt, 
            "slug": slug.current,
            "image": image.asset->url,
            categories,
            content
        }`,
    { slug }
  );
}
