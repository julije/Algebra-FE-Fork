var words = ["quickest", "brown", "fox", "jumps", "over", "the", "lazy", "dog", "mojpasjecrneboje"];

// 1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.
function findLongestWord(arr) {
  if (arr.length === 0) {
    // Provjera za prazan niz
    return "";
  }
  var longest = arr[0]; // Inicijaliziraj s prvom riječju
  for (let i = 1; i < arr.length; i++) {
    // Počni od drugog elementa
    if (longest.length < arr[i].length) {
      longest = arr[i];
    }
  }
  return longest;
}

// 2. Vratite tu riječ iz funkcije i spremite u varijablu.
var longestWord = findLongestWord(words);

// 3. Ispišite varijablu u konzoli.
console.log("Najduža riječ je: " + longestWord);
