// Definir funciones esenciales
// Funciones esenciales
// Variables globales
var almacenamiento = localStorage;

// Funciones esenciales
function sumar() {
  var numeros = obtenerNumeros();
  var resultado = 0;
  for (var i = 0; i < numeros.length; i++) {
    resultado += numeros[i];
  }
  mostrarResultado("El resultado de la suma es: " + resultado);
}

function restar() {
  var numeros = obtenerNumeros();
  var resultado = numeros[0];
  for (var i = 1; i < numeros.length; i++) {
    resultado -= numeros[i];
  }
  mostrarResultado("El resultado de la resta es: " + resultado);
}

function multiplicar() {
  var numeros = obtenerNumeros();
  var resultado = 1;
  for (var i = 0; i < numeros.length; i++) {
    resultado *= numeros[i];
  }
  mostrarResultado("El resultado de la multiplicación es: " + resultado);
}

function dividir() {
  var numeros = obtenerNumeros();
  var resultado = numeros[0];
  for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] !== 0) {
      resultado /= numeros[i];
    } else {
      mostrarResultado("Error: división por cero");
      return;
    }
  }
  mostrarResultado("El resultado de la división es: " + resultado);
}

// Obtener números utilizando prompts
function obtenerNumeros() {
  var cantidad = parseInt(prompt("Ingrese la cantidad de números:"));
  var numeros = [];
  for (var i = 0; i < cantidad; i++) {
    var valor = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
    numeros.push(valor);
  }
  return numeros;
}

// Mostrar resultado en el DOM
function mostrarResultado(mensaje) {
  var resultadoDiv = document.createElement("div");
  resultadoDiv.textContent = mensaje;
  resultadoDiv.className = "resultado";
  document.getElementById("resultados").appendChild(resultadoDiv);
}

// Almacenar y recuperar datos en el storage
function almacenarDatos() {
  var clave = prompt("Ingrese la clave:");
  var valor = prompt("Ingrese el valor:");
  almacenamiento.setItem(clave, valor);
  alert("Datos almacenados correctamente.");
}

function recuperarDatos() {
  var clave = prompt("Ingrese la clave de los datos a recuperar:");
  var valor = almacenamiento.getItem(clave);
  if (valor) {
    alert("El valor almacenado es: " + valor);
  } else {
    alert("No se encontraron datos para la clave ingresada.");
  }
}