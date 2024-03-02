// - Array From
// - Write a function that adds commas to number
// - Label Value Types With Generic
// - Presentational Component

const addComma = (number: number) => {
  if (Number.isNaN(number)) {
    console.error('input is not a valid number');
    return '';
  }
  return number.toLocaleString();
};

export { addComma };
