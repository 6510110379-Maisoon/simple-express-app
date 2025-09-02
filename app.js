// app.js
function add(a, b) {
    // Bug / Code Smell: ใช้ === แทน == → แก้ไขให้ถูกต้องแล้ว
    if (a === null || b === null) {
        return 0;
    }

    return a + b;
}

// Code Smell: ใช้ console.log แบบ string concatenation แทน template literals
console.log("2 + 3 = " + add(2, 3));
