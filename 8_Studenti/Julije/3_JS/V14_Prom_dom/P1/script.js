//var ulEl = document.getElementById("list");
//console.log(ulEl);

/* var liEls = document.getElementsByTagName("li"); */
//var liEls = document.querySelectorAll("li");
//console.log(liEls[0]);

//! dodati na početak doda h1 element
var descriptionNode = document.querySelector(".description");

//console.log(descriptionNode.parentNode);

var h1El = document.createElement("h1");

descriptionNode.parentNode.prepend(h1El);

//! ispod diva sa klasom "description" se umetne novi div sa klasom "info"

var infoDiv = document.createElement("div");

infoDiv.classList.add("info");
infoDiv.classList.add("info2");
/* infoDiv.classList.remove("info");
infoDiv.classList.toggle("info");
 */
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

//console.log(descriptionNode.nextSibling);
//var bodyEl = document.getElementsByTagName("body")[0];
//var footerEl = document.getElementById("footer");
//bodyEl.insertBefore(infoDiv, footerEl);

//*OVO ISPOD JE KOD OD GORE SAMO ISPRAVLJEN

/* 
// dodati na početak doda h1 element
var descriptionNode = document.querySelector(".description");

var h1El = document.createElement("h1");
h1El.textContent = "Naslov stranice"; // Dodan tekst unutar <h1>

descriptionNode.parentNode.prepend(h1El);

// ispod diva sa klasom "description" se umetne novi div sa klasom "info"
var infoDiv = document.createElement("div");
infoDiv.classList.add("info");
infoDiv.textContent = "Ovo su dodatne informacije."; // Dodan sadržaj unutar <div class="info">

// Ispravno umetanje odmah ispod .description
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);
// Alternativa za moderne preglednike:
// descriptionNode.after(infoDiv);

 */

//! lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata

var ulEl = document.getElementById("list");

for (var i = 0; i < 3; i++) {
  var liEl = document.createElement("li");

  ulEl.appendChild(document.createElement("li"));
}
