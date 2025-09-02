// app.js
function add(a, b) {
    // Bug / Code Smell: ใช้ == แทน === (SonarQube มักเตือน)
    if (a == null || b == null) {
        return 0;
    }

    // Code Smell: variable ไม่ถูกใช้งาน
    let unusedVar = 42;

    // Code Smell: magic number
    return a + b + 1;
}

// Code Smell: ใช้ console.log แบบ string concatenation แทน template literals
console.log("2 + 3 = " + add(2, 3));
