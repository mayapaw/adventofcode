import * as fs from 'node:fs';

const input = fs.readFileSync('src/2024/day03/input.txt', 'utf-8');

const matches = input.match(/(mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\))/g);

if (!matches) {
  throw new Error('No matches found');
}

let isEnabled = true;
const parsedMatches = matches.reduce((acc: number[], instruction) => {
  if (instruction === 'do()') {
    isEnabled = true;
    return acc;
  }

  if (instruction === 'don\'t()') {
    isEnabled = false;
    return acc;
  }

  if (!isEnabled) {
    return acc;
  }

  const [a, b] = (instruction.match(/\d{1,3}/g) ?? []).map((n) => parseInt(n, 10));

  return [...acc, a * b];
}, [])

console.log(parsedMatches.reduce((acc, n) => acc + n, 0));
