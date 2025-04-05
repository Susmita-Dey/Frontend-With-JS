/* Question: Valid Anagram
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: s = "racecar", t = "carrace"
Output: true

Example 2:
Input: s = "jar", t = "jam"
Output: false

Constraints:
s and t consist of lowercase English letters.

Recommended Time & Space Complexity
You should aim for a solution with O(n + m) time and O(1) space, where n is the length of the string s and m is the length of the string t.

Hint 1
A brute force solution would be to sort the given strings and check for their equality. This would be an O(nlogn + mlogm) solution. Though this solution is acceptable, can you think of a better way without sorting the given strings?

Hint 2
By the definition of the anagram, we can rearrange the characters. Does the order of characters matter in both the strings? Then what matters?

Hint 3
We can just consider maintaining the frequency of each character. We can do this by having two separate hash tables for the two strings. Then, we can check whether the frequency of each character in string s is equal to that in string t and vice versa.
 */

// Brute force solution with Time Complexity O(nlogn+mlogm) and Space Complexity O(1) or O(n+m) depending on the sorting algorithm.
class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    let s_sorted = s.split("").sort().join("");
    let t_sorted = t.split("").sort().join("");

    return s_sorted == t_sorted;
  }
}

// Hash Table
class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const countS = {};
    const countT = {};
    for (let i = 0; i < s.length; i++) {
      countS[s[i]] = (countS[s[i]] || 0) + 1;
      countT[t[i]] = (countT[t[i]] || 0) + 1;
    }

    for (const key in countS) {
      if (countS[key] !== countT[key]) {
        return false;
      }
    }
    return true;
  }
}

// Hash Table - Optimal Solution
class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
      count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    return count.every((val) => val === 0);
  }
}
