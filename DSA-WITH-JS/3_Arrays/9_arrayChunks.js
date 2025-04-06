// Array Chunk
// Write a function that takes an array and a chunk size as input. The function should return a new array is split into chunks of the specified size.
// Input: [1,2,3,4,5,6,7,8], 3
// Output: [[1,2,3],[4,5,6],[7,8]]
// Input: [1, 2, 3, 4, 5], 2
// Output: [[1, 2], [3, 4]]

const chunk = (arr, size) => {
    const chunked = [];
    let index = 0;

    while (index < arr.length) {
        chunked.push(arr.slice(index, index + size));
        index += size;
    }

    return chunked;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const size = 3;
const result = chunk(arr, size);
console.log(result); // [[1,2,3],[4,5,6],[7,8]]