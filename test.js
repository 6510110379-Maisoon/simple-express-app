// test.js
const assert = require("assert");

function add(a, b) {
    return a + b;
}

// simple test
assert.strictEqual(add(2, 3), 5);
console.log("Test passed ✅");
