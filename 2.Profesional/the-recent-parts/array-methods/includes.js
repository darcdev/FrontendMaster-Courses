var arr = [10, 20, NaN, 30, 40, 50];

arr.indexOf(30) != -1; //true

//best
// arr.includes(valuetoSearch,optional?(index)) //true or false
arr.includes(30);
arr.includes(30, 3);
arr.includes(NaN, 3);
