// 01. hoisting concept

const greeting = showGreeting("Selamat pagi!");

// cara expressive, bakalan error karena const harus di inisialisasi sebelum dipake
// nama variable menjadi nama function
// const showGreeting = function (message) {
//   return message;
// };

// cara declarative, sebutannya regular function
function showGreeting(message) {
  return message;
}

console.log(greeting);

// 02. struktur function

// 03. function pada properti object

const user = {
  username: "Megaa",
  log(message) {
    return `${this.username} - ${message}`;
  },

  greeting(greeting) {
    return greeting;
  },

  getUsername() {
    return this.username;
  },
};

console.log(user.getUsername());
console.log(user.greeting("Selamat pagi!"));
console.log(user.log("menyapa selamat pagi"));

// 04. regular function

function showMessage(message) {
  return `Halo ${message}`;
}

// 05. arrow function
const showMessages = (message) => `Halo ${message}`;

console.log(showMessages);

// function secara expressive
const userLogs = function (username) {
  return (message) => {
    return `${username} - ${message}`;
  };
};

// tingkatan ekesekusi => dari line atas ke bawah
// jadi "saya" menjadi argumen pertama => username
// "belajar ..." jadi argumen kedua => message
const log = userLogs("saya");
console.log(log("belajar javascript functional programming"));

// 06. konsep functional programming
