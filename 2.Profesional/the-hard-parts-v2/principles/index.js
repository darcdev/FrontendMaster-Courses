'use strict'

// global execution context


const num = 3;

// local execution context
function multiplyBy2(inputNumber) {

    const result = inputNumber * 2;
    return result;
}
// local execution context

const output = multiplyBy2(num); // 6
const newOutput = multiplyBy2(10) // 20


// global execution context