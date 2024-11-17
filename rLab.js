const csvString = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

// Step 1: Split the CSV string into rows
let rows = csvString.split('\n'); // Split into rows

// Step 2: Split each row into columns
let twoDimensionalArray = rows.map(row => row.split(',')); // Create a 2D array

// Cache the array for later use
console.log(twoDimensionalArray);

// Step 3: Transform the 2D array into an array of objects
let headers = twoDimensionalArray[0].map(header => header.toLowerCase()); // Get headers and convert to lowercase
let objectsArray = twoDimensionalArray.slice(1).map(row => {
    let obj = {};
    headers.forEach((header, index) => {
        obj[header] = row[index]; // Assign values to keys
    });
    return obj; // Return the object
});

// Cache the array for later use
console.log(objectsArray);

// Step 4:  Sorting and Manipulating Data

objectsArray.pop() // Inital array of objects 
objectsArray.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" });
objectsArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// Calculate average age 
let totalAge = 0;
for (let i = 0; i < objectsArray.length; i++) {
    totalAge += parseInt(objectsArray[i].age);
}
let averageAge = totalAge/ objectsArray.length;
console.log(averageAge)

// Step 5: Full Circle

// Transform data back to csv format

let header = Object.keys(objectsArray[0]).join(","); // Make header
let row = objectsArray.map(obj => Object.values(obj).join(",")).join("\n"); // Make rows
const csv = `${header}\n${rows}`; // Combine headers and rows

console.log(csv);