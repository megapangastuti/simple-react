// 01. array destructuring

const [hewanPertama] = ["Kuda", "Tikus", "Kucing"];
console.log([hewanPertama]);

const [, hewanKedua] = ["Kuda", "Tikus", "Kucing"];
console.log([hewanKedua]);

const [, , hewanKetiga] = ["Kuda", "Tikus", "Kucing"];
console.log([hewanKetiga]);

// 02. Object destructuring

const buburAyam = {
  jenisBeras: "berasCianjur",
  suwiran: "ayam kampung",
  topping: "cakwe",
  bumbu: ["kecap", "sambel", "kerupuk"],
};

const { jenisBeras } = buburAyam;

console.log(jenisBeras);

// 03. object literal enhancement

const namaGunung = "Semeru";
const ketinggian = 3676; // dalam meter
// const

// 04. the spread operator

// const makanan
