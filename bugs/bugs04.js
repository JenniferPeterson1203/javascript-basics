//  Modify in place, any number that is a multiple of 3, replace it with it's index times 3
// Do not change the forEach function

function replaceMultiplesOfThree(arr) {
    arr.forEach((num, index) => {
        if (num % 3 === 0) {
            num = index * 3; 
        }
    });
    return arr;
}

// const numbers = [3, 5, 9, 12, 7, 15];
// console.log('replaceMultiplesOfThree:', replaceMultiplesOfThree(numbers)); 
// Expected output: [0, 5, 6, 9, 7, 15]

//What will 'a' log?

let a = 5;

function changeValue(num) {
    return num = 10;  
}

changeValue(a);
console.log('a', a); 

//What will 'arr' log
let arr = [1, 2, 3];

function modifyArray(a) {
    a[0] = 99; 
}

modifyArray(arr);
console.log('arr:',arr); 


