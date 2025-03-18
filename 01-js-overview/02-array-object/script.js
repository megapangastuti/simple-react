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

const { jenisBeras, suwiran, bumbu } = buburAyam;

console.log(jenisBeras, suwiran); // output : beras Cianjur ayam kampung
console.log(bumbu);

// 03. object literal enhancement

const namaGunung = "Semeru";
const ketinggian = 3676; // dalam meter
const cetakInfo = function () {
  console.log(`Gunung ${this.namaGunung} memiliki ketinggian ${this.ketinggian} meter`);
};

const pendakian = { namaGunung, ketinggian, cetakInfo };
console.log(pendakian);
pendakian.cetakInfo();

// 04. the spread operator : Menggabungkan Array
const makanan = ["Nasi Goreng", "Sate Ayam", "Gado-gado"];
const minuman = ["Es Teh", "Jus Jeruk"];
const menuLengkap = [...makanan, ...minuman];
console.log(menuLengkap.join(", "));

// 05. Spread Operator : Mengambil sisa elemen pada Array
const buahBuahan = ["Apel", "Pisang", "Jeruk", "Mangga"];
const [buahPertama, ...buahLainnya] = buahBuahan;
console.log(buahLainnya.join(", "));

// 06. Spread Operator : Mengumpulkan argument
function rutePerjalanan(...args) {
  let [kotaAwal, ...kotaLanjutan] = args;
  let [kotaTujuan, ...kotaSinggahan] = kotaLanjutan.reverse();
  console.log(`melewati ${args.length} kota`);
  console.log(`mulai dari ${kotaAwal}`);
  console.log(`tujuan akhirnya adalah ${kotaTujuan}`);
  console.log(`singgah ${kotaSinggahan.length} kali di antaranya`);
}

rutePerjalanan("Jakarta", "Bogor", "Puncak", "Bandung", "Cimahi");

// 07. Spread Operator pada Object
const makanPagi = {
  sarapan: "nasi uduk",
  makanSiang: "ayam goreng",
};

const makanMalam = "ikan bakar";

const menuMakanan = {
  ...makanPagi,
  makanMalam,
};

console.log(menuMakanan);
