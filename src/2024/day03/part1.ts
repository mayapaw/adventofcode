import * as fs from 'node:fs';

const input = fs.readFileSync('src/2024/day03/input.txt', 'utf-8');

const matches = input.match(/(mul\(\d{1,3},\d{1,3}\))/g);

if (!matches) {
  throw new Error('No matches found');
}

const parsedMatches = matches.map((match) => {
  const [a, b] = (match.match(/\d{1,3}/g) ?? []).map((n) => parseInt(n, 10));

  return a * b;
});

console.log(parsedMatches.reduce((acc, n) => acc + n, 0));
