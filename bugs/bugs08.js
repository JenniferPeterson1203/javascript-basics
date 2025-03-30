//Fix the bug. Do not modify the original input
function sortAndFilterEven(numbers) {
  // OPTION 1 for the deep copy
  const copy = structuredClone(numbers);

  // OPTION 2 for the deep copy
  // const copy = JSON.parse(JSON.stringify(numbers));
  return copy.sort((a, b) => a - b).filter((num) => num % 2 === 0);

  // console.log(copy);

  // return numbers.sort().filter(num => num % 2 === 0);
}

const input = [10, 2, 1, 4, 20];
const result = sortAndFilterEven(input);
console.log(result); // [2, 4, 10, 20]
