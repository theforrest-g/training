let n = 2;
let m = 5;

let a = Math.abs(m-n);
let a1 = Math.round(Math.random() * a);
let min1 = Math.min (n, m)
console.log (min1 + a1);


let b = Math.abs(m-n);
let b1 = Math.round(Math.random() * b);
let min2 = Math.min (n, m)
console.log (min2 + b1);

console.log (a1 > b1);
console.log (a1 < b1);
console.log (a1 >= b1);
console.log (a1 <= b1);
console.log (a1 === b1);
console.log (a1 !== b1);