//Find the bug: 
//Create a copy of an array and change the first element in the array. 

function updateNestedArray(data) {

    const copiedData = [...data];
    copiedData[0][0] = 999;
  
    return copiedData;
  }
  

//   Input:
  const originalData = [[1, 2],[3, 4]];
  
  const newData = updateNestedArray(originalData);
  
  console.log("Original Data:", originalData);
  console.log("New Data:", newData);


  // Would you change anything about this function?
  function addSumArray (nums) {
    let sum = 0;

    nums.map((num) => sum += num);

    return sum;
  }
  
  console.log('addSumArray:', addSumArray([1,2,3,4,5]));

  //Is there a bug here?
  function addSumArray2 (nums) {
    let sum = 0;

    nums.forEach((num) => sum += num);
    return sum;
  }

  console.log('addSumArray2:', addSumArray2([1,2,3,4,5]));


  