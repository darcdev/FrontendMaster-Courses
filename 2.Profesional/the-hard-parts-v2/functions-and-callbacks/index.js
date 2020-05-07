// generalizando funciones

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