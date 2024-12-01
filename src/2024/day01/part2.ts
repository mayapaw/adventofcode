import * as fs from 'node:fs';

const input = fs.readFileSync('src/2024/day01/input.txt', 'utf-8');

const sum = (numbers: number[]): number => numbers.reduce((acc, n) => acc + n, 0);

const countAppearances = (numbers: number[], n: number): number => numbers.filter((m) => m === n).length;

const numbers = input.split('\n')
  .map((n) => n.split('   ').map((n) => parseInt(n, 10)))
  .reduce((acc, n) => [[...acc[0], n[0]].filter(Boolean), [...acc[1], n[1]].filter(Boolean)], [[], []])

const leftNumbers = numbers[0];
const rightNumbers = numbers[1];

const similarityScore = leftNumbers.map((n) => countAppearances(rightNumbers, n) * n);

const result = sum(similarityScore)

console.log(result);
