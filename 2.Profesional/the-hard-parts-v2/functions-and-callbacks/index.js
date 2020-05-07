/*** Generalize funciones ***/

//bad form

function squareTen() {
    return 10 * 10
}

function squareNine() {
    return 9 * 9
}

// good form Dont Repeat Yourself (DRY)

function squareNumber(number) {
    return number * number;
}

/*** High order functions and callbacks ***/

function copyArrayAndManipulate(array, instructions) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}

function multiplyBy2(input) { return input * 2; }
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

/*** Arrow function ***/

//TODO : don't run code below causes SyntaxError

//version 1 -> pass definition function in argument
const multiplyBy2 = input => input * 2
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
//version 2 -> pass arrow function in argument directly
const result = copyArrayAndManipulate([1, 2, 3], input => input * 2);