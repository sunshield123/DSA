// Define the number of rows
const rows = 5;

// Loop through rows
for (let i = 1; i <= rows; i++) {
  // Initialize an empty string for the current row
  let row = '';
  
  // Loop through columns (number of asterisks on each row)
  for (let j = 1; j <= i; j++) {
    // Add an asterisk to the current row
    row += '* ';
  }
  
  // Print the current row to the console
  console.log(row);
}

// * 
// * * 
// * * *
// * * * *
// * * * * *
// * * * * * * 