import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'

module.exports = {
  input: 'src/main.js',
  output: {
    file: 'Format JSON.popclipext/format-json.js',
    format: 'cjs',
    compact: true,
  },
  plugins: [resolve(), commonjs()],
};
