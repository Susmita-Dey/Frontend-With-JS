// Ques 4 - Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Brute Force Solution
const targetSum = function (nums, target) {
  let indexes;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) {
      indexes = [i, i + 1];
    }
  }
  return indexes;
};

console.log(targetSum([2, 7, 11, 15], 26));

// [3,2,4] => 3+2, 3+4, 2+4 => 7, 7, 6

// Using JS Objects
const twoSum = function (nums, target) {
  var obj = {};

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];

    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 26));

// nums = [2,7,11,15], target = 26
// {
//     "2":0,  // 26 - 2 = 24
//     "7": 1,
//     "11": 2,  // 26-11 = 15
//     "15":     // 26 - 15 = 11 => [obj[11],3] => [2, 3]
// }
