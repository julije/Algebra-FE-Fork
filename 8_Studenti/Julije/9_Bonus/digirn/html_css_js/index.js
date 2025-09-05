import { toggleNav } from "./js/shared/functions";

document.addEventListener("DOMContentLoaded", main);

function main() {
  let hamburgeEl = document.getElementById("hamburger-icon");
  let asideEl = document.getElementsByTagName("aside")[0];

  document.addEventListener("click", (event) => {
    const asideElDisplay = window.getComputedStyle(asideEl).display;

    if (event.target.closest("div") && asideElDisplay === "block") toggleNav(hamburgeElm, asideEl);
  });

  hamburgerEl.addEventListener("click", () => toggleNav(hamburgeEl, asideEl));
}
