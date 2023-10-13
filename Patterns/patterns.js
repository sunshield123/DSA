// Define the number of rows and columns
const rows = 5;
const columns = 5;

// Loop through rows
for (let i = 0; i < rows; i++) {
  // Initialize an empty string for the current row
  let row = '';
  
  // Loop through columns
  for (let j = 0; j < columns; j++) {
    // Add an asterisk to the current row
    row += '* ';
  }
  
  // Print the current row to the console
  console.log(row);
}



