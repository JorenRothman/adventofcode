import { Day } from '../day';

class Day1 extends Day {
    constructor() {
        super(1);
    }

    solveForPartOne(input: string): string {
        const expression = /\d+/g;

        const regex = new RegExp(expression);

        const lines = input.split('\n');

        const numbers = lines.map((value) => value.match(expression));

        const correctNumbers = numbers.map((number) => {
            if (!number) {
                return 0;
            }

            let first = '';
            let last = '';

            let num = 0;

            if (number.length < 2) {
                first = number[0];
                last = number[0];
            } else {
                first = number[0];

                last = number[number.length - 1];
            }

            if (first.length > 1) {
                first = first[0];
            }

            if (last.length > 1) {
                last = last[last.length - 1];
            }

            num = Number.parseInt(first + last);

            return num;
        });

        const result = correctNumbers.reduce((prev, val) => {
            return prev + val;
        }, 0);

        return `${result}`;
    }

    solveForPartTwo(input: string): string {
        return input;
    }
}

export default new Day1();
