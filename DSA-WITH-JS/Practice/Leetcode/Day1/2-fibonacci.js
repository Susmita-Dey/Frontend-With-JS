// Ques 2 - Finonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...
// F(0) = 0, F(1) - 1
// F(n)= F(n - 1) + F(n - 2), for n > 1

// Input: n = 3 ---------->>>>> Output: 2

var fib = function (n) {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
};

const fibonacci = function (n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log("Without recursion, fibonacci number is " + fib(5));
console.log("-------------------------------------");
console.log("Using recursion, fibonacci number is " + fibonacci(5));
