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

/**
 * Search array of objects based on key or keys provided
 * @returns array of object matched with key or keys
 * @param search
 * @param objects
 * @param searchBy
 */

export const searchFilter = <T>(
    searchQuery: string,
    objects: T[],
    searchBy: (keyof T & string) | (keyof T & string)[],
): T[] | [] => {
    const query = searchQuery.toLowerCase();
    if(!query) return [];
    return objects.filter((item) =>
        typeof searchBy === 'string'
            ? /* when providing single key */
            String(item[searchBy]).toLowerCase().includes(query)
            : /* when providing multiple keys */
            searchBy.some((key) =>
                String(item[key]).toLowerCase().includes(query),
            ),
    );
};