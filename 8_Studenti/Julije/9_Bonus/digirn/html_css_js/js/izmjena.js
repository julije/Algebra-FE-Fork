document.addEventListener("DOMContentLoaded", main);

function main() {
  // doshvati id naloga

  const urlParams = new URLSearchParams(window.location.search);
  const odabaraniNalogId = urlParams.get("id");

  // Ucitaj naloge iz local storage

  const nalozi = JSON.parse(localStorage.getItem("tmpNalozi")) || [];

  console.log("odabrao:" + odabraniNalogId);

  let okButtonEl = document.getElementById("ok");
  let cancelButtonEl = document.getElementById("cancel")[0];
  let brojNalogaEl = document.getElementById("broj_naloga");
  let brojNarudzbe = document.getElementById("narudzbenica");
  let datumNalogaEl = document.getElementById("datum_nalogaEl");
  let naruciteljEl = document.getElementById("naruciteljEl");
  let izvrsiteljEl = document.getElementById("izvrsiteljEl");
  let mjestotroskaEl = document.getElementById("mjesto_troskaEl");
  let nositeljTroskaEl = document.getElementById("nositelj_troskaEl");
  let datumPocetkaEl = document.getElementById("datum_pocetkaEl");
  let vrijemePocetkaEl = document.getElementById("vrijeme_pocetkaEl");
  let datumZavrsetkaEl = document.getElementById("datum_zavrsetkaEl");
  let vrijemeZavrsetkaEl = document.getElementById("vrijeme_zavrsetkaEl");
  let naslovEl = document.getElementById("naslovEl");
  let opisEl = document.getElementById("opisEl");
  let aIzmjenaEl = document.getElementById("aIzmjena");
  let aIzmjenaSmEl = document.getElementById("aIzmjena-small");
  let aBrisanjeEl = document.getElementById("aBrisanje");
  let aBrisanjeSmEl = document.getElementById("aBrisanje-smallsEl");

  okButtonEl.addEventListener("click", handleOkClick);
  cancelButtonEl.addEventListener("click", () => handleCancelClick(odabaraniNalogId));

  // u nizu naloga pronađiodabrane

  const odobaraniNalog = nalozi.find((nalog) => nalog.id === odabraniNalogId);

  // popuni elementa odabranim nalogom
  brojNalogaEl.value = odabraniNalog.brojNaloga;
  brojNarudzbe.value = odabraniNalog.brojNarudzbe;
  datumNalogaEl.value = odabraniNalog.datumNaloga;
  naruciteljEl.value = odabraniNalog.narucitelj;
  izvrsiteljEl.value = odabraniNalog.izvrsitelj;
  mjestotroskaEl.value = odabraniNalog.mjestotroska;
  nositeljTroskaEl.value = odabraniNalog.nositeljTroska;
  datumPocetkaEl.value = odabraniNalog.datumPocetka;
  vrijemePocetkaEl.value = odabraniNalog.vrijemePocetka;
  datumZavrsetkaEl.value = odabraniNalog.datumZavrsetka;
  vrijemeZavrsetkaEl.value = odabraniNalog.vrijemeZavrsetka;
  naslovEl.value = odabraniNalog.naslov;
  opisEl.value = odabraniNalog.opis;

  // poziva se pri odabiru brisanja naloga

  function handleOkClick() {
    const answer = confirm("Obrisi nalog");
    if (answer) {
      // popuni nalog novim vrijednostima
      odabraniNalog.brojNaloga = brojNalogaEl.value;
      odabraniNalog.brojNarudzbe = brojNarudzbe.value;
      odabraniNalog.datumNaloga = datumNalogaEl.value;
      odabraniNalog.narucitelj = naruciteljEl.value;
      odabraniNalog.izvrsitelj = izvrsiteljEl.value;
      odabraniNalog.mjestotroska = mjestotroskaEl.value;
      odabraniNalog.nositeljTroska = nositeljTroskaEl.value;
      odabraniNalog.datumPocetka = datumPocetkaEl.value;
      odabraniNalog.vrijemePocetka = vrijemePocetkaEl.value;
      odabraniNalog.datumZavrsetka = datumZavrsetkaEl.value;
      odabraniNalog.vrijemeZavrsetka = vrijemeZavrsetkaEl.value;
      odabraniNalog.naslov = naslovEl.value;
      odabraniNalog.opis = opisEl.value;

      const nalogIndex = nalozi.indexOf(odobaraniNalog);
      nalozi.splice(nalogIndex, 1);
      localStorage.setItem("tmpNalozi", JSON.stringify(nalozi));
      window.open("lista.html", "_self");
    }
  }
  function handleCancelClick(id) {
    window.open(`prikaz.html?id=${id}`, "_self");
  }
}
