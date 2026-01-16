const myStringVariable = "Mathematics"; // Constants cannot be changed

console.log(myStringVariable.length); // The length property, is not a method!
console.log(myStringVariable.charAt(5)); // OR use standard indexing! (var[])
console.log(myStringVariable.indexOf("at")); // returns index of first character
console.log(myStringVariable.lastIndexOf("at")); // While indexof returns the first occurrence, lastindexof returns the lastoccurrence.
console.log(myStringVariable.slice(5, 8)); // Like slicing in python
console.log(myStringVariable.toLowerCase()); // uppercase
console.log(myStringVariable.toUpperCase()); // thye same
console.log(myStringVariable.includes("mat")); // in keyword
console.log(myStringVariable.split("a")); // the same as in pytnon