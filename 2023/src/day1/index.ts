import { match } from 'assert';
import { Day } from '../day';

class Day1 extends Day {
    constructor() {
        super(1);
    }

    findNumbers(string: string) {
        const numberStrings = [
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
        ];

        const numberMap: { [k: string]: string } = {
            one: '1',
            two: '2',
            three: '3',
            four: '4',
            five: '5',
            six: '6',
            seven: '7',
            eight: '8',
            nine: '9',
        };

        let matches = numberStrings.map((numberString) => {
            const index = string.indexOf(numberString);

            if (index === -1) {
                return {
                    number: '100000000',
                    index: 1000000,
                };
            }

            if (numberString.length > 1) {
                numberString = numberMap[numberString];
            }

            return {
                number: numberString,
                index,
            };
        });

        matches.sort((a, b) => {
            return a?.index - b?.index;
        });

        const result = matches.filter((match) => match.number !== '100000000');

        return result.map(({ number }) => number);
    }

    solveForPartOne(input: string): string {
        const expression = /\d+/g;

        const lines = input.split('\n');

        const numbers = lines.map((value) => value.match(expression));
        let sum = 0;

        numbers.forEach((number) => {
            if (!number || number.length < 1) {
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

            sum = sum + num;
        });

        return `${sum}`;
    }

    solveForPartTwo(input: string): string {
        const lines = input.split('\n');

        const numbers = lines.map((value) => this.findNumbers(value));

        let sum = 0;

        numbers.forEach((number) => {
            if (!number) {
                return 0;
            }

            if (number.length < 1) {
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

            sum = sum + num;
        });

        console.log({ sum });

        return `${sum}`;
    }
}

export default new Day1();
