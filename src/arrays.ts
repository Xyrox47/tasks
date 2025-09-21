import exp from "constants";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    const newList = [numbers[0]];
    newList.push(numbers[numbers.length - 1]);
    return newList;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripleArray = numbers.map((num: number): number => 3 * num);
    return tripleArray;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intoInt = numbers.map((str: string): number =>
        isNaN(parseInt(str)) ? 0 : parseInt(str),
    );

    return intoInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const remove$ = amounts.map((str: string): string =>
        str.at(0) === "$" ? (str = str.slice(1)) : str,
    );

    const intoInt = remove$.map((str: string): number =>
        isNaN(parseInt(str)) ? 0 : parseInt(str),
    );
    return intoInt;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newMessages = [...messages];
    const removeQuestion = newMessages.filter(
        (str: string): boolean => str.at(-1) !== "?",
    );
    const uppperCased = removeQuestion.map((str: string): string =>
        str.at(-1) === "!" ? str.toUpperCase() : str,
    );
    return uppperCased;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessThan4 = words.filter((str: string): boolean => str.length <= 3);

    return lessThan4.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }

    const checkedForRed = colors.filter(
        (str: string): boolean => str !== "red",
    );
    const checkedForBlue = checkedForRed.filter(
        (str: string): boolean => str !== "blue",
    );
    const checkedForGreen = checkedForBlue.filter(
        (str: string): boolean => str !== "green",
    );

    if (checkedForGreen.length >= 1) {
        return false;
    }
    // const checked = colors.map((str: string): string =>
    //     str !== "red" || str !== "blue" || str !== "green" ?  : str,
    // );

    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
    );
    const expression = addends.join("+");

    return `${sum}=${expression}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNegativeIndex = values.findIndex((num) => num < 0);

    const sum = (
        firstNegativeIndex === -1 ? values : (
            values.slice(0, firstNegativeIndex)
        )).reduce((acc, num) => acc + num, 0);

    if (firstNegativeIndex === -1) {
        return [...values, sum];
    }
    const copy = [...values];
    copy.splice(firstNegativeIndex + 1, 0, sum);

    return copy;
}
