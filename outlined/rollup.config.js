import css from 'rollup-plugin-css-only';

export default {
  input: 'src/main.js',
  output: {},
  plugins: [
+   css({ output: 'public/build/vendor.css' }),
    svelte({
    }),]
};

