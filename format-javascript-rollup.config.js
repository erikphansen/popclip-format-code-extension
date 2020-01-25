import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'

module.exports = {
  input: 'src/main-javascript.js',
  output: {
    file: 'Format JavaScript.popclipext/main.js',
    format: 'cjs',
    compact: true,
  },
  external: ['fs', 'os'],
  plugins: [resolve(), commonjs()],
};
