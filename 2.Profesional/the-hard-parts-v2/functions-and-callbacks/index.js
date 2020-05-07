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