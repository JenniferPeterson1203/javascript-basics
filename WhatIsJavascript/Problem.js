// Given an integer array nums sorted in non-decreasing order, return an 
// array of the squares of each number sorted in non-decreasing order.


// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

function sortedSquares(nums) {

    const sortedArray = new Array(nums.length);

    let start = 0;
    let end = nums.length - 1;
    let placement = nums.length - 1;

    const squaredArray = nums.map((number) => number * number);

    while(start <= end) {
        if(squaredArray[start] < squaredArray[end]) {
            sortedArray[placement] = squaredArray[end];
        } else {
            sortedArray[placement] = squaredArray[start];
        }
        placement++;
    }

    return sortedArray;

}

console.log('sortedSquares:', sortedSquares([-7,-3,2,3,11]));