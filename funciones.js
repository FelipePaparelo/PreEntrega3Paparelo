// Definir eventos y funciones de respuesta
document.addEventListener("DOMContentLoaded", cargarPagina);

function cargarPagina() {
  // Agregar eventos a los botones del menú
  document.getElementById("sumarBtn").addEventListener("click", sumar);
  document.getElementById("restarBtn").addEventListener("click", restar);
  document.getElementById("multiplicarBtn").addEventListener("click", multiplicar);
  document.getElementById("dividirBtn").addEventListener("click", dividir);

  // Recuperar datos almacenados en el storage, si existen
  let resultadoGuardado = localStorage.getItem("resultado");
  if (resultadoGuardado) {
    mostrarResultado(resultadoGuardado);
  }
}

// Funciones esenciales
function sumar() {
  let num1 = prompt("Ingrese el primer número:");
  let num2 = prompt("Ingrese el segundo número:");

  let resultado = parseFloat(num1) + parseFloat(num2);

  // Almacenar resultado en el storage
  localStorage.setItem("resultado", resultado);

  mostrarResultado(resultado);
}

function restar() {
  let num1 = prompt("Ingrese el primer número:");
  let num2 = prompt("Ingrese el segundo número:");

  let resultado = parseFloat(num1) - parseFloat(num2);

  localStorage.setItem("resultado", resultado);

  mostrarResultado(resultado);
}

function multiplicar() {
  let num1 = prompt("Ingrese el primer número:");
  let num2 = prompt("Ingrese el segundo número:");

  let resultado = parseFloat(num1) * parseFloat(num2);

  localStorage.setItem("resultado", resultado);

  mostrarResultado(resultado);
}

function dividir() {
  let num1 = prompt("Ingrese el primer número:");
  let num2 = prompt("Ingrese el segundo número:");

  let resultado = parseFloat(num1) / parseFloat(num2);

  localStorage.setItem("resultado", resultado);

  mostrarResultado(resultado);
}

// Mostrar resultado en la página
function mostrarResultado(resultado) {
  let output = document.getElementById("output");
  output.textContent = "El resultado es: " + resultado;
}