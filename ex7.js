let money = parseFloat(prompt("Nhap so bat ki"));
let text = money.toLocaleString("en-US", {style: "currency", currency:"VND"});
console.log(text + "VND");