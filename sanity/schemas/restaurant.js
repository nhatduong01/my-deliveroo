export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (Rule) => Rule.require(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Restaurant",
    },
    {
      name: "long",
      type: "number",
      title: "Longtitude of the Restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant address",
      validation: (Rule) => Rule.require(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a Rating from (1-5 stars)",
      validation: (Rule) =>
        Rule.require()
          .min(1)
          .max(5)
          .error("Please enter a valid Number from 1 to 5"),
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.require(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dished",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
