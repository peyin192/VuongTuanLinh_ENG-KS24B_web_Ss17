let a = parseFloat(prompt("Nhap a"));
let b = parseFloat(prompt("Nhap b"))
let c = parseFloat(prompt("Nhap c"));

let delta = b*b - 4*a*c;
let x1 = ( -b + Math.sqrt(delta) ) / 2*a;
console.log("X1 = " + x1);

let x2 = ( -b - Math.sqrt(delta) ) / 2*a;
console.log("X1 = " + x2);