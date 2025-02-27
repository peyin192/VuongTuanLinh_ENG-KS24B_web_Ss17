let d1 = prompt("Nhap Nam - Thang - Ngay")
let date1 = new Date(d1);

let d2 = prompt("Nhap Nam - Thang - Ngay")
let  date2 = new Date(d2);

let time1 = date1.getTime()
let time2 = date2.getTime()

let time = time2 - time1;
let day = time / 1000 / 60 / 60 / 24;
console.log(day)

