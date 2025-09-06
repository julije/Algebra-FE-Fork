import { dummyNalozi } from "./data.js";

export function toggleNav(hamburgeEl, asideEl) {
  let asideDisplay = window.getComputedStyle(asideEl).display;

  if (asideDisplay === "block") {
    asideEl.classList.remove("open");
  } else {
    asideEl.classList.add("open");
  }

  hamburgeEl.classList.toggle("hamburger-change");
  hamburgeEl.classList.toggle("change");
}

export function ucitajFirebase() {
  try {
    // dohvat podataka
    return dummyNalozi;
  } catch (error) {
    alert(error);
  }
}

export function zapisiFirebase() {
  console.log("Nalozi zapisani");
}

function obrisiFirebase() {}
