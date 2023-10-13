let numbers = [1, 2, 3, 10, 5];
let largest = numbers[0]; // Assume the first element is the largest

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   }
// }

numbers.map((number) => {
  largest = number > largest ? number : largest;
  console.log("number ", number);
});


console.log("The largest number is:", largest);

