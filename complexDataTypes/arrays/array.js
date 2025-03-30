// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

var rotate = function (nums, k) {
  //   let count = k;

  //   while (count > 0) {
  //     const lastNumber = nums.pop();
  //     nums.unshift(lastNumber);
  //     count--;
  //   }

  //   return nums;

  k = k % nums.length; //normalize k => 2 //1 //0
  let array = new Array(nums.length);
  let leftPointer = 0; //2
  let rightPointer = nums.length - 1; // 1
  let initialSlots = nums.length - k; //0

  while (initialSlots > 0) {
    array[k + leftPointer] = nums[leftPointer]; //[5,6,2,3]
    // console.log("array:", array);
    leftPointer++;
    // console.log("leftPointer:", leftPointer);
    initialSlots--;
    // console.log("k:", k);
  }

  // console.log("array:", array);
  while (k > 0) {
    array[k - 1] = nums[rightPointer]; //
    k--;
    rightPointer--;
  }

  // console.log(array);
  //   k = (k/nums.length)
  // [4, 1, 2, 3]
  return array;
};
// [_, 2, 3, 5]
// [2, 3, 5, 6] k = 5 output: [6, 2, 3, 5] k= 1

//input: [1, 2, 3, 4, 5, 6] k = 2 output: [5, 6, 1, 2, 3, 4]

// input: [1, 2, 3, 4] k = 9 output: [4, 1, 2, 3]

console.log("rotate:", rotate([2, 3, 5, 6], 6));
// console.log("rotate:", rotate([1, 2, 3, 4, 5, 6, 7], 3));
// Given an integer array nums, return true if any value appears at least twice in the array, and
// return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

function containsDuplicate(nums) {
  // Problem
  // given an array of integers and checking whether or not the array contains any duplicates
  // returning a boolean
  // Edge Cases/Examples
  // [1, 2, 5, 2, 3, 2] => true
  //[1, 2, 3, 9, 8, 7, 6] => false => {1: true, 2: true }

  // Data Structure
  // array
  // hash (object)

  // Algorithm

  // Code
  // use hash to iterate through the array
  const hashMap = new Map();
  // const set = new Set(nums).size;

  console.log(set);
  return set !== nums.length;

  for (const num of nums) {
    // check if an element is in the hashmap
    if (hashMap.has(num)) {
      // if it is return true
      return true;
    }
    // else i want to update the hash by adding that element to it
    hashMap.set(num, true);
  }
  // when the loop is done i will return false
  return false;
}

// console.log(
//   "containsDuplicate:",
//   containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) // {1:true,  }
// );

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of
// all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

function findDisappearedNumbers(nums) {
  // Problem
  //we're given an array of a certain length in the range of 1-n (n = length of array)
  // input arr is missing elements within the range
  //return the missing nums in a new array
  // Edge Case / Example
  //would not be an empty array
  //there will always be missing nums in the array
  //must return arr in asc order
  //Data Structure
  //Array
  // Algo
  // [4, 3, 2, 7, 8, 2, 3, 1]; 1-8
  // {4, 3, 2, 7, 8, 1}
  let n = nums.length;
  let hash = new Map();
  let result = [];
  // for loop btwn 1 and arr.length

  for (const num of nums) {
    if (!hash.has(num)) {
      hash.set(num, 1);
    }
    // else {
    //   hash.set(num, hash.get(num) + 1);
    // }
  }

  // console.log(hash); 1, 2
  for (let i = 1; i <= n; i++) {
    // ele is not in the hash
    if (!hash.has(i)) {
      result.push(i);
    }
  }

  //push into an empty array
  // Code
  return result;
}

console.log(
  // "findDisappearedNumbers:",
  // findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])
  "findDisappearedNumbers:",
  findDisappearedNumbers([1, 1])
);

// Given two sorted arrays nums1 and nums2, merge them into one sorted array.

// create a set

// Input: nums1 = [1,2,3], nums2 = [2,5,6]
// Output: [1,2,2,3,5,6]

// Input: nums1 = [2, 4, 7, 10], nums2 = [2, 3]
// Output:
// [2, 2, 3, 4, 7, 10]

// Input: nums1 = [1, 5, 9, 10, 15, 20], nums2 = [2, 3, 8, 13]
// Output: [1, 2, 3, 5, 8, 9, 10, 13, 15, 20]

// Input: nums1 = [0, 1], nums2 = [2, 3]
// Output: [0, 1, 2, 3]

// Constraints:
// 1 <= nums1.size(), nums2.size() <= 105
// 0 <= a[i], b[i] <= 107

function mergeArrays(nums1, nums2) {
  // Problem
  // We're given two sorted arrays.
  // We need to return a single merged array in sorted order.
  // Edge Cases / Clarifications
  // - Can the arrays be of different lengths?
  // - Should the merged array contain duplicates, or should they be removed?
  // - Are the input arrays guaranteed to be sorted?
  // Data Structure
  // - Input: Two sorted arrays (nums1 and nums2)
  // - Output: A single sorted array
  // Algorithm
  // 1. Create an empty array with a length of (nums1.length + nums2.length).
  // 2. Use two pointers:
  //    - `left` for nums1 (starting at index 0)
  //    - `right` for nums2 (starting at index 0)
  // 3. Iterate through both arrays:
  //    - Compare the elements at the current `left` and `right` pointers.
  //    - Place the smaller element into the new array and move the corresponding pointer forward.
  // 4. Use two while loops to add any remaining elements:
  //    - While `left` is within bounds, add remaining elements from nums1.
  //    - While `right` is within bounds, add remaining elements from nums2.
  // 5. Alternatively, use the spread operator:
  //    - `[...nums1, ...nums2]` to merge both arrays.
  //    - Return the merged array sorted with `.sort((a, b) => a - b)`.
}

console.log("mergeArrays:", mergeArrays([2, 4, 7, 10], [2, 3]));

// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Example 1:
// Input: arr = [2,1]
// Output: false

// Example 2:
// Input: arr = [3,5,5]
// Output: false

// Example 3:
// Input: arr = [0,3,2,1]
// Output: true

//Example 4:
// Input: arr = [0,2,3,4,5,2,1,0];
// Output: true

// Example 5:
// Input: arr = [0,2,3,3,5,2,1,0];
// Output: false

function validMountainArray(arr) {
  // Problem
  // We have an array of numbers.
  // We need to check if it makes a valid mountain shape.
  // A valid mountain:
  // - Goes up, hits a peak, then goes down.
  // - Needs at least 3 numbers.
  // Edge Cases
  // - The peak can't be the first or last number.
  // - The array needs to increase, then decrease.
  // Steps:
  // 1. If the array has less than 3 numbers, return false.
  // 2. Use a pointer called `left` starting at index 0.
  //    - Move `left` forward while the numbers are going up.
  // 3. Check if the peak is at the first or last index.
  //    - If yes, return false.
  // 4. Keep moving `left` forward while the numbers are going down.
  // 5. If `left` stops at the last index, return true.
  //    - Otherwise, return false.

  // GUARD CLAUSE
  // get the max num within the arr
  // let maxNum = Math.max(...arr);
  // if(arr[0] === maxNum || arr[arr.length -1] === maxNum) return false
  // // if the length of the given arr is less than 3 return false
  // if (arr.length < 3) return false;

  // create a pointer for the start of the arr
  // create a pointer for the next ele

  // create a for loop

  //check if the start is < next
  //if true update increment both pointers by 1
  //else if start ele === maxNum
  //if start > next
  //increment the pointers
  //else return false

  //return true

  if (arr.length < 3) return false;

  let i = 0;
  let n = arr.length;

  // Ascending part
  while (i < n - 1 && arr[i] < arr[i + 1]) {
    i++;
  }

  // Check if the peak is valid
  if (i === 0 || i === n - 1) return false;

  // Descending part
  while (i < n - 1 && arr[i] > arr[i + 1]) {
    i++;
  }

  // If we've reached the end, it's a valid mountain
  return i === n - 1;
}
// l > r
console.log(validMountainArray([0, 2, 3, 4, 5, 2, 1, 5, 0])); //false
// l > r
console.log(validMountainArray([0, 2, 3, 4, 5, 2, 1, 0])); //true
