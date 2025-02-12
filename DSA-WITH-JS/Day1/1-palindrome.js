// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
// Given an integer x, return true if x is palindrome integer.

// Example 1: Input: x = 121, Output: true
// Example 2: Input: x = 10, Output: false

const isPalindrome = function (x) {
  //   if (x < 0) {
  //     return false;
  //   }
  return x < 0 ? false : x == +x.toString().split("").reverse().join("");
};

const res = isPalindrome(0);

console.log(res); // true

// 121 -> "121" -> ["1", "2", "1"] -> ["1", "2", "1"] -> "121"
