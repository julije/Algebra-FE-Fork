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
