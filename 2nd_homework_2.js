let a = 13.890123;
let b = 2.891564;
let n = 3;

let a1 = a - Math.floor(a);
let aNorm = Math.floor(
    a1 * Math.pow(10, n)
    );
   
let b1 = b - Math.floor(b);
let bNorm = Math.floor(
    b1 * Math.pow(10, n)
    );

console.log (a1, b1);
console.log (aNorm, bNorm);
console.log (aNorm > bNorm);
console.log (aNorm < bNorm);
console.log (aNorm >= bNorm);
console.log (aNorm <= bNorm);
console.log (aNorm === bNorm);
console.log (aNorm !== bNorm);