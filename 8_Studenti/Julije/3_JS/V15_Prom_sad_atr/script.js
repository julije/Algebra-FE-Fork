//! 1 - h1 element sadrži tekst "Karlovac"

var h1El = document.querySelector("h1");
h1El.innerText = "Karlovac";

//! 2 - span u description div-u je zamijenjen h3 elementom sa tekstom "5 rijeka"

var descEl = document.querySelector(".description");
descEl.innerHTML = "Grad na <h3> 5 rijeka </h3>";

//! 3 - div s klasom "info" sadrži text "Peta rijeka je piva."

var infoEl = document.querySelector(".info");
infoEl.innerText = "Peta je pivo.";

//! 4 - lista u footer elementu izlistava svih 5 karlovačkih rijeka u li elementima

var rijeke = ["Mreznica", "Kupa", "Korana", "Dobra", "Karlovačko"];

var footerEl = document.querySelector("#footer");

for (var i = 0; i < rijeke.length; i++) {
  footerEl.querySelectorAll("li")[i].innerText = rijeke[i];
}
