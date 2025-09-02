// app.js
function add(a, b) {
    var sum = a + b;  // ใช้ var แทน const → SonarQube จะเตือน
    console.log("Adding numbers"); // console.log เกินจำเป็น
    return sum;
}

console.log("2 + 3 =", add(2, 3));

// เพิ่มตัวแปร unused → code smell
var unusedVar = 123;
