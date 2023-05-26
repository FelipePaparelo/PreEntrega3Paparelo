// Definir funciones esenciales
function sumar(a, b) {
    return a + b;
}

  function restar(a, b) {
    return a - b;
}

  function multiplicar(a, b) {
    return a * b;
}

  function dividir(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Error: división por cero";
    }
}

  // Capturar eventos y procesar simulador
  function procesarSimulador() {
    // Obtener valores de entrada
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    // Realizar operaciones
    var suma = sumar(num1, num2);
    var resta = restar(num1, num2);
    var multiplicacion = multiplicar(num1, num2);
    var division = dividir(num1, num2);

    // Mostrar resultados en el DOM
    document.getElementById('resultadoSuma').innerHTML = "Suma: " + suma;
    document.getElementById('resultadoResta').innerHTML = "Resta: " + resta;
    document.getElementById('resultadoMultiplicacion').innerHTML = "Multiplicación: " + multiplicacion;
    document.getElementById('resultadoDivision').innerHTML = "División: " + division;

    // Almacenar datos en el storage
    localStorage.setItem('num1', num1);
    localStorage.setItem('num2', num2);
}

  // Cargar datos almacenados
  window.onload = function() {
    var num1 = localStorage.getItem('num1');
    var num2 = localStorage.getItem('num2');

    document.getElementById('num1').value = num1;
    document.getElementById('num2').value = num2;

    procesarSimulador(); // Procesar simulador al cargar la página
}