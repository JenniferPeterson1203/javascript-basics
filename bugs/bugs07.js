//Find the bug
//Change the second student's first score and not the input

//Input: 
const students = [
  { name: "Alice", scores: [85, 90] },
  { name: "Bob", scores: [78, 82] }
];


console.log('demonstrateShallowCopyIssue:',demonstrateShallowCopyIssue(students));

function demonstrateShallowCopyIssue(students) {
    const copiedStudents = [...students]; 
  
    copiedStudents[1].scores[0] = 100;
  
    return copiedStudents;
  }
  
  

//Return only the odd numbers in the array
  const nums = [0, 1, 2, 3, 4, 5];
  console.log('filterOddNumbersWithBug:', filterOddNumbersWithBug(nums));

  function filterOddNumbersWithBug(numbers) {
    const filtered = numbers.filter(num => {
      if (num % 2 === 0) {
        return false; 
      }
      return true;
    });

  }


  