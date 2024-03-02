/**
 * Generates an array of incremental numbers from 1 to the limit.
 * @param limit - The upper limit of the array.
 * @returns An array of incremental numbers.
 */
const generateIncrementalArray = (limit: number): number[] => {
  return Array.from({ length: limit }, (_, index) => index + 1);
};

/**
 * Adds comma to the number
 * @param number
 * @returns number with comma added
 */
const addCommasToNumber = (number: number) => {
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

const searchFilter = <T>(
  search: string,
  objects: T[],
  searchBy: (keyof T & string) | (keyof T & string)[],
): T[] | undefined => {
  const query = search.toLowerCase();
  return objects.filter((item) =>
    typeof searchBy === 'string'
      ? /* when providing single key */
        String(item[searchBy]).toLowerCase().includes(query)
      : /* when providing multiple keys */
        searchBy.some((key) =>
          String(item[key]).toLowerCase().includes(search),
        ),
  );
};

export { generateIncrementalArray, addCommasToNumber, searchFilter };
