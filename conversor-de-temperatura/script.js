
function converter() {
  var a = parseInt(document.getElementById("input-celsius").value);
  var convertido = (a *1.8)+32;
  var b =document.getElementById("tempConvertida");
  var d = convertido.toFixed(1);
  var c = "O temperatura é " + d; b.innerHTML = c + " Fº";   
}