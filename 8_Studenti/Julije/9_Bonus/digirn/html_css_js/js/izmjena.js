document.addEventListener("DOMContentLoaded", main);

function main() {
  // doshvati id naloga

  const urlParams = new URLSearchParams(window.location.search);
  const odabaraniNalogId = urlParams.get("id");

  // Ucitaj naloge iz local storage

  const nalozi = JSON.parse(localStorage.getItem("tmpNalozi")) || [];

  console.log("odabrao:" + odabraniNalogId);

  let okButtonEl = document.getElementById("ok");
  let cancelButtonEl = document.getElementById("cancel")[0]; /*
  let brojNalogaEl = document.getElementById("brojNaloga");
  let brojNarudzbe = document.getElementById("brojNarudzbe");
  let datumNalogaEl = document.getElementById("datumNalogaEl");
  let naruciteljEl = document.getElementById("naruciteljEl");
  let izvrsiteljEl = document.getElementById("izvrsiteljEl");
  let mjestotroskaEl = document.getElementById("mjestotroskaEl");
  let nositeljTroskaEl = document.getElementById("nositeljTroskaEl");
  let datumPocetkaEl = document.getElementById("datumPocetkaEl");
  let vrijemePocetkaEl = document.getElementById("vrijemePocetkaEl");
  let datumZavrsetkaEl = document.getElementById("datumZavrsetkaEl");
  let vrijemeZavrsetkaEl = document.getElementById("vrijemeZavrsetkaEl");
  let naslovEl = document.getElementById("naslovEl");
  let opisEl = document.getElementById("opisEl");
  let aIzmjenaEl = document.getElementById("aIzmjena");
  let aIzmjenaSmEl = document.getElementById("aIzmjena-small");
  let aBrisanjeEl = document.getElementById("aBrisanje");
  let aBrisanjeSmEl = document.getElementById("aBrisanje-smallsEl"); */

  okButtonEl.addEventListener("click", handleOkClick);
  cancelButtonEl.addEventListener("click", () => handleCancelClick(odabaraniNalogId));

  // u nizu naloga pronađiodabrane

  const odobaraniNalog = nalozi.find((nalog) => nalog.id === odabraniNalogId);

  // popuni elementa odabranim nalogom
  /*  brojNalogaEl.innerText = odabraniNalog.brojNaloga;
  brojNarudzbe.innerText = odabraniNalog.brojNarudzbe;
  datumNalogaEl.innerText = odabraniNalog.datumNaloga;
  naruciteljEl.innerText = odabraniNalog.narucitelj;
  izvrsiteljEl.innerText = odabraniNalog.izvrsitelj;
  mjestotroskaEl.innerText = odabraniNalog.mjestotroska;
  nositeljTroskaEl.innerText = odabraniNalog.nositeljTroska;
  datumPocetkaEl.innerText = odabraniNalog.datumPocetka;
  vrijemePocetkaEl.innerText = odabraniNalog.vrijemePocetka;
  datumZavrsetkaEl.innerText = odabraniNalog.datumZavrsetka;
  vrijemeZavrsetkaEl.innerText = odabraniNalog.vrijemeZavrsetka;
  naslovEl.innerText = odabraniNalog.naslov;
  opisEl.innerText = odabraniNalog.opis; */
  // poziva se pri odabiru brisanja naloga
  function handleOkClick() {
    /*  const answer = confirm("Obrisi nalog");
    if (answer) {
      const nalogIndex = nalozi.indexOf(odobaraniNalog);
      nalozi.splice(nalogIndex, 1);
      localStorage.setItem("tmpNalozi", JSON.stringify(nalozi));
      window.open("lista.html", "_self");
    } */
  }
  function handleCancelClick(id) {
    window.open(`prikaz.html?id=${id}`, "_self");
  }
}
