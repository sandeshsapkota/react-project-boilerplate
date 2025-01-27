/**
 * Generates an array of incremental numbers from 1 to the limit.
 * @param limit - The upper limit of the array.
 * @returns an array of incremental numbers.
 */
export const generateIncrementalArray = (limit: number): number[] => {
    return Array.from({length: limit}, (_, index) => index + 1);
};

/**
 * Adds comma to the number
 * @param number
 * @returns number with comma added
 */
export const addCommasToNumber = (number: number) => {
    if (Number.isNaN(number)) {
        console.error('Input is not a valid number');
        return '';
    }
    return number.toLocaleString();
};

export const sumArray = (array: number[]) => array.reduce((a, b) => a + b);

