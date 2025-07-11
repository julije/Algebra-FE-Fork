// 1. Datum
var datum = new Date();
console.log(datum.toString());
console.log(datum.toLocaleString());

// 2. Objekt Osoba s toJSON
const Osoba = {
  ime: "Perica",
  age: 55,
  toJSON: function () {
    return this.ime + "" + this.age + "" + "godina";
  },
};

console.log(Osoba.valueOf()); // vraća objekt
console.log(Osoba.ime.valueOf()); // "Perica"

// 3. JSON obrada
console.log(Osoba);
console.log(JSON.stringify(Osoba));

const jsonAdresa = '{"ulica" : "ilica", "broj": 21, "grad": "Zagreb"}';
const objAdresa = JSON.parse(jsonAdresa);
console.log(objAdresa.grad); // Zagreb

// 4. DOM i ekran
console.log(JSON.stringify(Osoba));
console.log("sirina ekrana je:" + window.screen.width);

const element = document.getElementById("myDiv");
console.log(element); // null ako ne postoji

// 5. Regularni izraz
const tekst = "Ovo je primjer teksta";
const re = /primjer/;
console.log(tekst.replace(re, "nastavak")); // Ovo je nastavak teksta
