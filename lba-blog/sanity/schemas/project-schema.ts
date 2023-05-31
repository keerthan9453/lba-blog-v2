const project = {
  name: "project",
  title: " Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "publichedAt",
      title: "Publiched at",
      type: "date",
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      // of: [{ type: "reference", to: { type: "categories" } }],
      to: { type: "categories" },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "author.image",
      categories: "categories.title",
    },
    prepare(selection: { author: any; category: any }) {
      const { author, category } = selection;
      return Object.assign({}, selection, {
        subtitle: (author && `by ${author}`) || (category && `by ${category}`),
      });
    },
  },
};

export default project;
