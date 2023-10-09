function calcularLongitud() {

    var oracionIngresada = document.getElementById("oracionInput").value;
    var resultado = document.getElementById("resultado");

    var palabras = oracionIngresada.split(" ");
    var longitudPalabras = [];

    for (var i = 0; i < palabras.length; i++) {
        longitudPalabras.push(palabras[i].length);
    }

    resultado.innerHTML = "Longitud de palabras en la oración: " + longitudPalabras.join(", ");
}