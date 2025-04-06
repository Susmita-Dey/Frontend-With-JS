// Problem: Write a function that checks if a string is a palindrome
// Input: "racecar"
// Output: true

const isPalindrome = (str) => str.split('').reverse().join('') === str;

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
