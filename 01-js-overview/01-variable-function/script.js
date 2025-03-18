// example 1 : execution context
var x = 10;

function halo() {
  console.log("Hello world!");
}

halo();
console.log(x);

console.log(y);

var y = 10;

// example 2 : execution context 2
var n = 3;

function kuadrat(n) {
  var hasil = n * n;
  return hasil;
}

var kuadrat1 = kuadrat(n);
var kuadrat2 = kuadrat(8);

console.log(kuadrat1);
console.log(kuadrat2);

// example 3 : execution context 3

function funcA(m, n) {
  return m * n;
}

function funcB(m, n) {
  return funcA(m, n);
}

function getResult(num1, num2) {
  return funcB(num1, num2);
}

var res = getResult(5, 6);

console.log(res);

// example 4 : scope

function a() {
  var b = 10;
  c();
  function c() {
    var d = 100;
    console.log(b + d);
  }
}

a();

// example 5 : hoisting, let, const
halo();
console.log(x);

// let cant be accesed before it has been being initialized
// cant be accesed before the value is being assigned
let c = 10;

function halo() {
  console.log("Hello world!");
}

halo();
console.log(c);

console.log(d);

var d = 10;

// example 6 : let & const

let m = 10;
m = 100;
console.log(m);

// example 7 - block scope, simple closure
var d = 100;
let e = 200;
const f = 300;

{
  var d = 10;
  let e = 20;
  const f = 30;

  console.log("the value of d : ", d);
  console.log("the value of e : ", e);
  console.log("the value of f : ", f);
}

console.log("the value of d : ", d);
console.log("the value of e : ", e);
console.log("the value of f : ", f);

// example 8 : simple closure

function lapan() {
  let a = 10;
  function y() {
    console.log(a);
  }
  return y;
}

let z = lapan();
z();

// example 9 : enkapsulasi data
let angka = 0;

function counter() {
  angka++;
  return console.log(angka);
}

counter();
counter();
counter();

// example 10 : enkapsulasi data(problem)

function counter() {
  let angkaa = 0;

  function tambahAngka() {
    angkaa++;
    return console.log("nilai angkanya adalah:", angkaa);
  }

  return tambahAngka;
}

angkaa = 100;

let counterBaru = counter();

counterBaru();
counterBaru();
counterBaru();

// example 11 : closure: fungsi setengah jadi

function buatPenambah(x) {
  return function (y) {
    return x + y;
  };
}

let tambahLima = buatPenambah(5);
console.log(tambahLima(3));
console.log(tambahLima(10));

// example 12 - closure: callback & eventhandler

function buatHandlerKlik(nama) {
  return function () {
    console.log("Tombol " + nama + " diklik!");
  };
}

let tombol1Handler = buatHandlerKlik(1);
let tombol2Handler = buatHandlerKlik(2);

// simulasi event handler
tombol1Handler();
tombol2Handler();
