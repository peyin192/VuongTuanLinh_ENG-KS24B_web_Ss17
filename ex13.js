let amount = parseFloat(prompt("Nhập số tiền gửi (VND):"));
let months = parseInt(prompt("Nhập số tháng gửi:"));
calculateInterest(amount, months);

function calculateInterest(amount, months) {
    let annualRate = 4.3 / 100;
    let monthlyRate = annualRate / 12;
    let interest = amount * monthlyRate * months;
    let totalAmount = amount + interest;
    console.log(`Tiền lãi: ${interest.toLocaleString()} VND\nTổng số tiền nhận được: ${totalAmount.toLocaleString()} VND`);
}
