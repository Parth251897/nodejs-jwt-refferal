//map reducde
// const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
// let sum = 0;

// numbers.forEach(num => {
//   sum += parseInt(num);
// });

// console.log(sum);

// ["200","<400-600-800","1000>"]  * 3  using javascript output ["600","<1200-1800-2400","3000>"]
// const inputArray = ["200", "<400-600-800", "1000>"];
// const outputArray = inputArray.map(item => {
//   const parts = item.split(/([<>\-])/); // Split string into parts
  
//   // Process each part and adjust numerical values if necessary
//   const adjustedParts = parts.map(part => {
//     if (/^\d+$/.test(part)) { // If part is a number
//       return (parseInt(part) * 3).toString(); // Multiply by 3
//     } else {
//       return part; // Keep symbols unchanged
//     }
//   });
  
//   return adjustedParts.join(""); // Join parts back into a string
// });

// console.log(outputArray);

console.log((1==1 && 2==2) || (3==4));