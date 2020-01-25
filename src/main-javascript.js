import fs from 'fs';
import os from 'os';
import prettier from 'prettier/standalone';
import jsParsers from 'prettier/parser-babylon';

var input = process.env.POPCLIP_TEXT;

let prettierrc = {};

try {
  const prettierConfigPath = os.homedir() + '/.prettierrc';
  prettierrc = JSON.parse(fs.readFileSync(prettierConfigPath, 'utf8'));
} catch (error) {}

const formatted = prettier.format(input + '\n', {
  ...prettierrc,
  parser: 'babel',
  plugins: [jsParsers],
});

console.log(formatted.trim());
