import "./storybook-html.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ["Introduction", "Components"],
    },
  },
}