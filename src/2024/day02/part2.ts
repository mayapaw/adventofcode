import * as fs from 'node:fs';

const input = fs.readFileSync('src/2024/day02/input.txt', 'utf-8');

const lines = input.split('\n');

const isSafe = (report: number[]): boolean => {
  const sortedAsc = [...(new Set(report))].sort((a, b) => a - b);
  const sortedDsc = [...(new Set(report))].sort((a, b) => b - a);

  let isGentle = true
  report.reduce((acc, n) => {
    if (Math.abs(acc - n) > 3) {
      isGentle = false;
    }

    return n
  });

  return (JSON.stringify(report) === JSON.stringify(sortedAsc) || JSON.stringify(report) === JSON.stringify(sortedDsc)) && isGentle;
}

const parsedReport = lines.map((line) => line.split(' ').map((n) => parseInt(n, 10)))
  .map((report) => {
    return report.reduce((acc: boolean[], item, currentIndex) => {
      const combinations = report.filter((_, index) => index !== currentIndex);

      return [...acc, isSafe(combinations)];
    }, []).some((item: boolean) => item);
  }).filter(Boolean)

console.log(parsedReport.length);

