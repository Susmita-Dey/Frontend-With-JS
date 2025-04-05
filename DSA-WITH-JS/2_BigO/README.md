# Big O
Big O notation helps us to understand how long an algorithm will take to run or how much memory it will need as the amount of data it handles grows. It provides a high-level understanding of the algorithm's efficiency and performance.

Big O notation is used to describe the upper bound of an algorithm's time complexity, which means it gives us the worst-case scenario for how long an algorithm will take to run. It is expressed as a function of the input size (n) and ignores constant factors and lower-order terms.

*For example,* if an algorithm takes 2n<sup>2</sup> + 3n + 5 time to run, we would say it has a time complexity of O(n<sup>2</sup>) because as n grows larger, the n<sup>2</sup> term will dominate the growth of the function.

## O(1)
Signifies that the execution time of an algorithm is constant and does not depend on the input size. For example, accessing an element in an array by its index is O(1) because it takes the same amount of time regardless of the size of the array.

## O(n)
Signifies that the execution time of an algorithm grows linearly with the input size. For example, if you have a loop that iterates through an array of size n, the time complexity would be O(n).

## O(n<sup>2</sup>)
Signifies that the execution time of an algorithm grows quadratically with the input size. For example, if you have a nested loop where each loop iterates through an array of size n, the time complexity would be O(n<sup>2</sup>).

## O(log n)
Signifies that the execution time of an algorithm grows logarithmically with the input size. For example, binary search has a time complexity of O(log n) because it divides the input size in half with each iteration.