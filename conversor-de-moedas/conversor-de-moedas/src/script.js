function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorLibra = parseFloat(valor);

  var valorLibraCorrente = document.getElementById("Câmbio");
  var libra = valorLibraCorrente.value;
  var LibraCorrente = parseFloat(libra);

  var valorEmDolar = valorLibra * LibraCorrente;
  console.log(valorEmDolar);

  var elementoConvertido = document.getElementById("valorConvertido");

  var valorConvertido = " O total convertido é " + valorEmDolar + " $";
  elementoConvertido.innerHTML = valorConvertido;
}
