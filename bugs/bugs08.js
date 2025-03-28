//Fix the bug. Do not modify the original input
function sortAndFilterEven(numbers) {
    return numbers.sort().filter(num => num % 2 === 0);
  }
  
  const input = [10, 2, 1, 4, 20];
  const result = sortAndFilterEven(input);
     
  