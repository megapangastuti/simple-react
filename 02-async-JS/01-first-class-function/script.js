// 01. First class Function: Function sebagai nilai dalam variable

// function expression
let helo = function () {
  console.log("Hello world");
};

helo();

// 1. Function Declaration
function Huwello() {
  console.log("Hello world");
}

// 2. Function Expression
const validasiPassword = function (password) {
  return password.length >= 8;
};

// 3. Arrow Function
const passwordValidation = (password) => password.length >= 8;

// 4. Function sebagai object yang memiliki property
function contoh() {
  contoh.properti = "Properti Fungsi";
}

contoh();
console.log(contoh.properti);

// 5. Function dikembalikan dari function lain
function buatPengali(pengali) {
  return function (angka) {
    return angka * pengali;
  };
}

const pengaliDua = buatPengali(2);
console.log(pengaliDua(5));

// 6. Function dikirim sebagai argumen (callback)
function sapa(nama, sapaan) {
  sapaan(nama);
}

function salam(nama) {
  console.log("Halo, " + nama + "!");
}

// salam adalah callback function
// function sebagai argumen => callback funtion
// "Mega" adalah argumen
// nama adaalah parameter
sapa("Mega", salam);
sapa("Mega", function (nama) {
  console.log("Huwalaw, " + nama + "!");
});

// 04. object yang memiliki property

function contoh() {
  contoh.properti = "Properti";
}

// 05. Perbedaan Jenis Function

// function expression
// const validasiPassword = function(password);

// callback Function => dibikin dulu, dipanggil nanti kalo udah mau dipake

function sapa(nama, sapaan) {
  sapaan(nama);
}

function salam(nama) {}
