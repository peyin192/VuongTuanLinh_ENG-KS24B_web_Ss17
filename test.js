const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateDateDifference(date1, date2) {
    try {
        let d1 = new Date(date1);
        let d2 = new Date(date2);
        
        if (isNaN(d1) || isNaN(d2)) {
            console.log("Định dạng ngày không hợp lệ. Vui lòng nhập theo định dạng YYYY-MM-DD.");
            rl.close();
            return;
        }
        
        let timeDifference = Math.abs(d2 - d1);
        let dayDifference = timeDifference / (1000 * 60 * 60 * 24);
        console.log(`Độ lệch là ${dayDifference} ngày`);
    } catch (error) {
        console.log("Đã xảy ra lỗi khi tính toán số ngày chênh lệch.");
    }
    rl.close();
}

rl.question("Nhập ngày thứ nhất (YYYY-MM-DD): ", (date1) => {
    rl.question("Nhập ngày thứ hai (YYYY-MM-DD): ", (date2) => {
        calculateDateDifference(date1, date2);
    });
});