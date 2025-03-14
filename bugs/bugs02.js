//Find the bug in the code:

function sumEvenNumbers(nums) {
    var sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            var sum = nums[i]; 
        }

        sum += nums[i] % 2 === 0 ? nums[i] : 0;
    }

    return sum;
}

console.log(sumEvenNumbers([3, 7, 2, 8, 5, 10])); // Correct output: 20
console.log(sumEvenNumbers([1, 3, 5, 7])); // Correct output: 0
console.log(sumEvenNumbers([12, 4, 6, 8])); // Correct output: 30
