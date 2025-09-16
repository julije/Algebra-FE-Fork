import { toggleNav, ucitajFirebase, zapisiFirebase } from "./shared/functions.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  let hamburgeEl = document.getElementById("hamburger-icon");
  let asideEl = document.getElementsByTagName("aside")[0];
  let aUcitajEl = document.getElementById("ucitaj");
  let aUcitajsmEl = document.getElementById("ucitaj-small");
  let aSpremijEl = document.getElementById("spremi");
  let aSpremijSmEl = document.getElementById("spremi-small");
  let tbodyEl = document.getElementsByTagName("tbody")[0];
  let nemaNalogaEl = document.getElementById("nema-naloga");

  document.addEventListener("click", (event) => {
    const asideElDisplay = window.getComputedStyle(asideEl).display;

    if (!event.target.closest("div") && asideElDisplay === "block") toggleNav(hamburgeElm, asideEl);
  });

  hamburgerEl.addEventListener("click", () => toggleNav(hamburgeEl, asideEl));
  aUcitajEl.addEventListener("click", ucitajNaloge);
  aUcitajsmEl.addEventListener("click", ucitajNaloge);
  aSpremijEl.addEventListener("click", spremiNaloge);
  aSpremijSmEl.addEventListener("click", spremiNaloge);
  // Prikazi sve naloge u tablicnom obliku
  function prikaziNaloge() {
    let nalozi = [];
    // pozivamo nakon odabira reda
    function odaberiRed(data) {
      // otvori dokument prikaz.html
      window.open(`prikaz.html?id=${data.id}`, "_self ");
      console.log(data.id);
    }

    const locStorNalozi = localStorage.getItem("tmpNalozi");
    if (locStorNalozi) {
      nalozi = JSON.parse(locStorNalozi);
    }

    // obrisi tekucu tablicu naloga
    while (tbodyEl.firstChild) {
      tbodyEl.firstChild.remove();
    }
    //AKO NEMA NALOGA PRIKAZI PORUKU
    if (nalozi.length === 0) {
      nemaNalogaEl.style.display = "block";
    } else {
      nemaNalogaEl.style.display = "none";
    }

    //za svaki nalog iz liste kreiraj strukturu unutar tablice
    nalozi.forEach((data, index) => {
      //kreiraj red
      let trEl = document.createElement("tr");
      trEl.title = "Odaberi za prikaz izmjenu ili brisanje";
      trEl.addEventListener("click", () => odaberiRed(data));

      //kreiraj stupac sa rednim brojem
      let tdEl = document.createElement("td");
      tdEl.innerText = index + 1;
      trEl.appendChild(tdEl);
      //kreiraj ostalapoljda

      let brojNalogaEl = document.createElement("td");
      let datumNalogaEl = document.createElement("td");
      let datumPocetkaEl = document.createElement("td");
      let datumZavrsetkaEl = document.createElement("td");
      let naruciteljEl = document.createElement("td");
      let izvrsiteljEl = document.createElement("td");
      let naslovEl = document.createElement("td");

      brojNalogaEl.innerText = data["brojNaloga"];
      datumNalogaEl.innerText = data["datumNaloga"];
      datumNalogaEl.className = "table-col-hide";
      datumPocetkaEl.innerText = data["datumPocetka"];
      datumPocetkaEl.className = "table-col-hide";
      datumZavrsetkaEl.innerText = data["datumZavrsetka"];
      datumZavrsetkaEl.className = "table-col-hide";
      naruciteljEl.innerText = data["narucitelj"];
      izvrsiteljEl.innerText = data["izvrsitelj"];
      naslovEl.innerText = data["naslov"];
      naslovEl.className = "table-col-hide";

      trEl.appendChild(brojNalogaEl);
      trEl.appendChild(datumNalogaEl);
      trEl.appendChild(datumPocetkaEl);
      trEl.appendChild(datumZavrsetkaEl);
      trEl.appendChild(narucitelj);
      trEl.appendChild(izvrsitelj);
      trEl.appendChild(naslov);

      tbodyEl.appendChild(trEl);
    });
  }

  function ucitajNaloge() {
    const answer = confirm("Ucitaj naloge iz baze?");
    if (answer) {
      let nalozi = ucitajFirebase();
      localStorage.setItem("tmpNalozi", JSON.stringify(nalozi));
    } else {
    }
    prikaziNaloge();
  }

  function spremiNaloge() {
    let tmpNalozi = JSON.parse(localStorage.getItem("tmpNalozi")) || [];
    if (tmpNalozi.length !== 0) {
      const answer = confirm("Spremi naloge u bazu");
      if (answer) {
        zapisiFirebase(tmpNalozi);
      }
    } else {
      alert("Nema naloga za spremanje");
    }
  }

  prikaziNaloge();
}
