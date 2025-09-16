// Toggle aside i hamburger elemente
export function toggleNav(hamburgerEl, asideEl) {
  // Toggle aside
  let asideElDisplay = window.getComputedStyle(asideEl).display;
  if (asideElDisplay === "block") {
    asideEl.classList.remove("open");
  } else {
    asideEl.classList.add("open");
  }

  // Toggle hamburger icon
  hamburgerEl.classList.toggle("hamburger-change");
  hamburgerEl.classList.toggle("change");
}

// Ucitaj Firebase podatke
export async function ucitajFirebase() {
  try {
    const tmpNalozi = [];

    const response = await fetch(
      "https://mojprojekt-74740-default-rtdb.europe-west1.firebasedatabase.app/digirn.json",
      {
        method: "GET",
      }
    );

    const data = await response.json(response);

    for (let key in data) {
      tmpNalozi.push(data[key]);
    }

    return tmpNalozi[0];
  } catch (error) {
    alert(error);
  }
}
// const API_URL to mozemo koristiti da napiseno skraceno url od firebasea ali to nisam napravio po predavanju
//ONDA BI BILO AWAIT FETCH(API_URL)

// Zapisi Firebase podatke
export async function zapisiFirebase(nalozi) {
  try {
    await obrisiFirebase();

    const response = await fetch(
      "https://mojprojekt-74740-default-rtdb.europe-west1.firebasedatabase.app/digirn.json",
      {
        method: "POST",
        body: JSON.stringify(nalozi),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    alert(error);
  }
}

// Obrisi Firebase podatke
async function obrisiFirebase() {
  try {
    const response = await fetch(
      "https://mojprojekt-74740-default-rtdb.europe-west1.firebasedatabase.app/digirn.json",
      {
        method: "DELETE",
      }
    );
  } catch (error) {
    alert(error);
  }
}
