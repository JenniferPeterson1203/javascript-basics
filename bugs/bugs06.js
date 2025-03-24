//Double all even numbers in the input arr. Find the bug

function doubleEvenNumbers(arr) {
    arr.map((num) => {
      if (num % 2 === 0) {
        num = num * 2;
      }
    });
    return arr;
  }
  
  const result = doubleEvenNumbers([1, 2, 3, 4]);

  