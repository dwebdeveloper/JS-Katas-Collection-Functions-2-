//1. Add
function add(x, y) {
    return x + y
}

let sum = add(2, 4);
//2.Multiply

/*function multiply(a, b) {
    for (let i = 0; i < a; i++) {
        console.log("code is running" + i);
        let sum = 0
        0 += b
    } return b
    //let multi = [];
    // multi.push(a}
    //sum += b
    // return console.log(total)//return console.log(multi)
    // let array = [];
    // array.concat(a);
    //console.log(array.concat)
}*/
function multi(a, b) {
    let bee = b;
    for (let i = 1; i < a; i++) {
        b += bee
    } return b
}

// 3. Power/Exponentiation 
function power(num, exponent) {
    let answer = 1;
    for (let i = 0; i < exponent; i++) {
        answer *= num
    }
    return answer;
}

//4. Factorial n! = n *(n - 1)* (n-2)..... 
function factorial(n) {//n = 4
    let num = n;
    for (let i = 3; i < n; i++) {
        //console.log(i)
        num *= (n - i)
    } return num
}