let radius = parseFloat(prompt("Nhập bán kính của hình cầu (cm):"));
calculateSphere(radius);

function calculateSphere(radius) {
    if (isNaN(radius) || radius <= 0) {
        console.log("Vui lòng nhập bán kính hợp lệ.");
        return;
    }
    let pi = Math.PI;
    let volume = (4 / 3) * pi * Math.pow(radius, 3);
    let surfaceArea = 4 * pi * Math.pow(radius, 2);
    let maxCircumference = 2 * pi * radius;
    console.log(`Thể tích hình cầu: ${volume.toFixed(2)} cm³`);
    console.log(`Diện tích bề mặt: ${surfaceArea.toFixed(2)} cm²`);
    console.log(`Chu vi lớn nhất: ${maxCircumference.toFixed(2)} cm`);
}