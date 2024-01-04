import { db } from "../utils/db.server";
type Author = {
  firstName: string;
  lastName: string;
  emailAdress: string;
};
type Blog = {
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  category: string;
  datePublished: Date;
};

async function seed() {
  await Promise.all(
    getAuthors().map((author) => {
      return db.author.create({
        data: {
          firstName: author.firstName,
          lastName: author.lastName,
          emailAdress: author.emailAdress,
        },
      });
    })
  );
  const author = await db.author.fineFirst({
    where: {
      firstName: "Samson",
    },
  });

  await Promise.all(
    getBlogs().map((blog) => {
      const { title, description, content, imageUrl, category, datePublished } =
        blog;
      return db.blog.create({
        data: {
          title,
          description,
          content,
          imageUrl,
          category,
          datePublished,
          authorId: author.id,
        },
      });
    })
  );
}

function getAuthors(): Array<Author> {
  return [
    {
      firstName: "Samson",
      lastName: "Chan",
      emailAdress: "samson@gmail.com",
    },
    {
      firstName: "Nikhil",
      lastName: "Sharma",
      emailAdress: "nikhil@gmail.com",
    },
    {
      firstName: "Daniel",
      lastName: "Kim",
      emailAdress: "daniel@gmail.com",
    },
  ];
}

function getBlogs(): Array<Blog> {
  return [
    {
      title: "What is Blockchain",
      description: "This is a description",
      content: "This is the content",
      imageUrl: "https://www.google.com",
      category: "Technology",
      datePublished: new Date(),
    },
    {
      title: "How much potnetial does Lassonde Blockchain have?",
      description: "This is a description",
      content: "This is the content",
      imageUrl: "https://www.google.com",
      category: "Technology",
      datePublished: new Date(),
    },
    {
      title: "How to make a blog",
      description: "This is a description",
      content: "This is the content",
      imageUrl: "https://www.google.com",
      category: "Technology",
      datePublished: new Date(),
    },
  ];
}
