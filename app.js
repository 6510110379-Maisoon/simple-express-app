// app.js 
function add(a, b) {
    // Code Smell 1: ใช้ console.log แบบ string concatenation แทน template literals
    if (a === null || b === null) {
        return 0;
    }

    return a + b;
}

// Code Smell 2: ใช้ console.log แบบ string concatenation
console.log("2 + 3 = " + add(2, 3));
