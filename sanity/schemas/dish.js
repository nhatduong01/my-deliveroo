export default {
  name: "dish",
  type: "document",
  title: "Dish",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of dish",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      type: "number",
      title: "Price of the dish in USD",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Dish",
    },
  ],
};
