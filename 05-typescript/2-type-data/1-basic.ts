// 1. type inference
let username = "megaa";
let glasses = 1;

// di typescript nggak bisa assign value dengan tipe data yang berbeda
// glasses = "2";
// username = [];

console.log(username);
console.log(glasses);

// 2. type annotation
let hobby: string = "cooking";
let panCount: number = 2;

console.log(hobby);
console.log(panCount);

// 3. argument function
function calculateTaxes(price: number, tax: number) {}
