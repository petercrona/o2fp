import typescript from "rollup-plugin-typescript2";
import strip from "@rollup/plugin-strip";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist/",
    format: "esm",
  },
  plugins: [
    typescript(),
    strip({
      include: "**/*.ts",
      functions: ["test", "describe"],
    }),
  ],
};
