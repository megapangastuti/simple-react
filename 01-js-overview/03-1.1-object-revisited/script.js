// cara membuat object pada javascript
// 1. object literal
let mahasiswa = {
  name: "Mega",
  energy: 10,
  makan: function (porsi) {
    this.energy = this.energy + porsi;
    console.log("Enjoy your food!");
  },
};

let mahasiswa2 = {
  name: "You",
  energy: 9,
  makan: function (porsi) {
    this.energy = this.energy + porsi;
    console.log("Enjoy your food!");
  },
};

// 2. Function Declaration
function User(id, name, salary) {
  let user = {};
  user.id = id;
  user.name = name;
  user.salary = salary;

  user.totalIncome = function (bonus) {
    this.salary += bonus;
    console.log(`${this.name}'s total income is ${this.salary}`);
  };

  return user;
}

let Mega = User(1, "Mega", 10_000_000);

// 3. Constructor Declaration => paling sering digunakan
// keywoard new
function Staf(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;

  this.totalIncome = function (bonus) {
    this.salary += bonus;
    console.log(`${this.name}'s total income is ${this.salary}`);
  };
}

let You = new Staf(2, "You", 100_000_000);
