// Problem: Sentence Capitalization
// Input: "hello world"
// Output: "Hello World"

const capitalize = (str) => str.split(' ').map(word => (word.charAt(0).toUpperCase() + word.slice(1))).join(' ');

console.log(capitalize("hello world")); // "Hello World"
console.log(capitalize("javascript is awesome")); // "Javascript Is Awesome"