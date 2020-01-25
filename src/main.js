import prettier from 'prettier/standalone';
import jsParsers from 'prettier/parser-babylon';

var inputJSON = process.env.POPCLIP_TEXT;

let prettierrc = {};

try {
  prettierrc = File.readJSON('~/.prettierrc');
} catch (error) {}
const formatted = prettier.format(inputJSON + '\n', {
  ...prettierrc,
  parser: 'json',
  plugins: [jsParsers],
});

console.log(formatted.trim());
