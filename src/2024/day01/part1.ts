import * as fs from 'node:fs';

const input = fs.readFileSync('src/2024/day01/input.txt', 'utf-8');

const sortNumbers = (numbers: number[]): number[] => numbers.sort((a, b) => a - b);

const countDistance = (a: number, b: number) => Math.abs(a - b);

const sum = (numbers: number[]): number => numbers.reduce((acc, n) => acc + n, 0);

const numbers = input.split('\n')
  .map((n) => n.split('   ').map((n) => parseInt(n, 10)))
  .reduce((acc: any[], n) => [[...acc[0], n[0]].filter(Boolean), [...acc[1], n[1]].filter(Boolean)], [[], []])

const sortedNumbersLeft = sortNumbers(numbers[0])
const sortedNumbersRight = sortNumbers(numbers[1])

const distance = sortedNumbersLeft.map((n, i) => countDistance(n, sortedNumbersRight[i]));

const result = sum(distance)

console.log(result);
