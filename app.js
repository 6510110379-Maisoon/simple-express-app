// app.js
function add(a, b) {
    // Code Smell 1: variable ไม่ถูกใช้งาน
    let unusedVar = 42;

    if (a === null || b === null) {
        return 0;
    }

    // Code Smell 2: ใช้ magic number
    return a + b + 7;
}

// Code Smell 3: ใช้ console.log แบบ string concatenation แทน template literals
console.log("2 + 3 = " + add(2, 3));
