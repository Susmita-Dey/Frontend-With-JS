// Problem: Write a function that reverses an integer
// Input: 12345
// Output: 54321

const reverseInteger = (n) => {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed);
}

console.log(reverseInteger(12345)); // 54321
console.log(reverseInteger(67890)); // 9876
console.log("-----------------");

const reverseInt = (num) => {
    let reversed = 0;

    while (num > 0) {
        reversed = (reversed * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed;
}

console.log(reverseInt(12345)); // 54321
console.log(reverseInt(67890)); // 9876