let numbers= [1,4,3,5,6,7];

let largest=numbers[0];


// removing the largest and then finding the largest in the array
// sorting the array and then getting the last element.

// we have sort function


numbers.sort()

// To remove element from the array we use either splice or filter


numbers.splice(numbers.length-1,1)
console.log(numbers);

let filteredArray=numbers.filter((number,index)=>{
   return number>3;
})

console.log(filteredArray);