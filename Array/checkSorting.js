let numbers = [1,2,3,4];


// index
const isSorted = numbers.every((value, index, array) => {
  if (index === 0) return true; // The first element is always considered sorted.
  return value >= array[index - 1];
});

console.log(isSorted);
