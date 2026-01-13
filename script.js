function pridat(src) {
  var obrazek = "<img src='" + src + "' width='30'>";
  
  // Poslední symbol [cite: 8]
  document.getElementById("posledni").innerHTML = obrazek;
  
  // Zápis do historie [cite: 9]
  document.getElementById("historie").innerHTML += obrazek;
}

function pridatText() {
  var text = document.getElementById("vstup").value;
  
  // Přidá se vždy pouze do historie [cite: 10]
  document.getElementById("historie").innerHTML += text + " ";
  document.getElementById("vstup").value = "";
}

function smazat() {
  // Smaže oba textové odstavce [cite: 11]
  document.getElementById("posledni").innerHTML = "";
  document.getElementById("historie").innerHTML = "";
}