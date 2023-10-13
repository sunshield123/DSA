let numbers = [1, 2, 3, 3, 4, 33, 33, 5, 6];



let modifiedArray = numbers.map((number, index) => {
  if (number !== numbers[index + 1]) {
    return number
  }
  else return 'duplicate';
});
console.log("checking what is inside the modifed array ", modifiedArray);
/**
 * how can alter array with loop and indexing
 * I know how to return new array
 * how to copy
 * return exisiting array
 * return new array
 * return boolean value
 * return sum result from the array
 */
