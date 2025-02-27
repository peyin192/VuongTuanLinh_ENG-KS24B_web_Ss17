let n = Number(prompt("Nhập số n"));
function qus(n) {
    return (n <= 0) ? `${n} không phải là số chính phương` :
        Number.isInteger(Math.sqrt(n)) ? `${n} là số chính phương` :
        `${n} không là số chính phương`;
}
console.log(qus(n));
