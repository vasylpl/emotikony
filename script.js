function pridat(src) {
  var obrazek = "<img src='" + src + "' width='30'>";
  
  // Poslední symbol 
  document.getElementById("posledni").innerHTML = obrazek;
  
  // Zápis do historie 
  document.getElementById("historie").innerHTML += obrazek;
}

function pridatText() {
  var text = document.getElementById("vstup").value;
  
  // Přidá se vždy pouze do historie 
  document.getElementById("historie").innerHTML += text + " ";
  document.getElementById("vstup").value = "";
}

function smazat() {
  // Smaže oba textové odstavce 
  document.getElementById("posledni").innerHTML = "";
  document.getElementById("historie").innerHTML = "";
}