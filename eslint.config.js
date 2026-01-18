import next from "eslint-config-next";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["node_modules", ".next"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
];
