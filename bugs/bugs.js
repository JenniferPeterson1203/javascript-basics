//Find the bug in this code: 


//Reverse a string
function reverseStringBug(str) {
    return str.reverse().join('');
}

console.log('reverseStringBug:', reverseStringBug('hello'))


//Write a function that reverses a number, but if the number is a negative number, the negative 
//sign remains in place

function reverseNegativeNumber(num) {
    if(num > 0) {
        return Number(num.split('').reverse().join(''));
    } else {
        const double = num * -2;
        const newNumber = double + num;
        return Number(newNumber.split('').reverse().join('')) * - 1;
    }
}

console.log('reverseNegativeNumber:', reverseNegativeNumber(21));
console.log('reverseNegativeNumber:', reverseNegativeNumber(-12));
