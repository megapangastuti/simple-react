// setTimeOut

setTimeout(function () {
  console.log("proses 5 detik");
}, 5000);

console.log("mulai");
setTimeout(function () {
  console.log("proses 5 detik");
}, 5000);
console.log("selesai");

// 1. Simple Callback
function sapa(nama, sapaan) {
  sapaan(nama);
}

function salam(nama) {
  console.log("Halo, " + nama + "!");
}

sapa("Mega", salam);
