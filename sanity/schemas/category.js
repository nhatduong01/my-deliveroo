export default {
  name: "category",
  type: "document",
  title: "Menu Category",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Category name",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "image",
      type: "image",
      title: "Image of category",
    },
  ],
};
