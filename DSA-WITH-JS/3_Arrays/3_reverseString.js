// Problem: Write a function that reverses a string
// Input: "hello"
// Output: "olleh"

const reversedString = (str) => str.split("").reverse().join("");

const reverseStr = (str) => {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
};

console.log(reversedString("hello"));
console.log(reversedString("apple"));
console.log(reverseStr("susmita"));
