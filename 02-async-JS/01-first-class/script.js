// 01. First class Function: Function sebagai nilai dalam variable

// function expression
let helo = function () {
  console.log("Hello world");
};

helo();

// function declaration
function Huwello() {
  console.log("Hello world");
}

// 02. dikirim sebagai argumen

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

// 03.  Function dikembalikan dari function lain
function buatPengali(pengali) {
  function pengaliKedua(angka) {
    return angka * pengali;
  }

  return pengaliKedua;
}

const pengaliDua = buatPengali(2);
console.log(pengaliDua(5));

// 04. object yang memiliki property

function contoh() {
  contoh.properti = "Properti";
}

// 05. Perbedaan Jenis Function

// Function declaration
function validasiPassword(password) {
  return password.length >= 8;
}

// function expression
// const validasiPassword = function(password);

// callback Function => dibikin dulu, dipanggil nanti kalo udah mau dipake

function sapa(nama, sapaan) {
  sapaan(nama);
}

function salam(nama) {}
