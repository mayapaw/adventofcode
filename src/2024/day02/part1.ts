import * as fs from 'node:fs';

const input = fs.readFileSync('src/2024/day02/input.txt', 'utf-8');

const lines = input.split('\n');

const parsedReport = lines.map((line) => line.split(' ').map((n) => parseInt(n, 10)))
  .map((report) => {
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
  ).filter(Boolean)

console.log(parsedReport.length);

