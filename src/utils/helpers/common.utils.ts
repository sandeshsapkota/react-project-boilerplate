const generateIncrementalArray = (limit: number) => {
  return Array.from({ length: limit }, (_, index) => index + 1);
};

export { generateIncrementalArray };
