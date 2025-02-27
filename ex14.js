let radius = parseFloat(prompt("Nhập bán kính (cm):"));
let height = parseFloat(prompt("Nhập chiều cao (cm):"));
calculateCylinder(radius, height);

function calculateCylinder(radius, height) {
    if (isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0) {
        console.log("Vui lòng nhập số hợp lệ.");
        return;
    }

    let pi = Math.PI;
    let perimeterBase = 2 * pi * radius;
    let lateralArea = perimeterBase * height;
    let totalArea = lateralArea + 2 * (pi * radius * radius);
    let volume = pi * radius * radius * height;

    console.log(`Chu vi đáy: ${perimeterBase.toFixed(2)} cm`);
    console.log(`Diện tích xung quanh: ${lateralArea.toFixed(2)} cm²`);
    console.log(`Diện tích toàn phần: ${totalArea.toFixed(2)} cm²`);
    console.log(`Thể tích hình trụ: ${volume.toFixed(2)} cm³`);
}

