/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UI: () => (/* binding */ UI),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\r\n\r\nclass UI {\r\n    constructor() {\r\n      this.textoHeading = document.querySelector('#administra');\r\n      this.textoAlerta = document.querySelector('#alerta');\r\n      this.listaCitas = document.querySelector('#citas');\r\n    }\r\n  \r\n    imprimirAlerta(mensaje, tipo) {\r\n      const divMensaje = document.createElement('div');\r\n      divMensaje.classList.add('alert', 'text-center', 'd-block', 'col-12');\r\n  \r\n      if (tipo === 'error') {\r\n        divMensaje.classList.add('alert-danger');\r\n      } else {\r\n        divMensaje.classList.add('alert-success');\r\n      }\r\n  \r\n      divMensaje.textContent = mensaje;\r\n  \r\n      this.textoHeading.parentNode.insertBefore(divMensaje, this.textoHeading.nextSibling);\r\n  \r\n      setTimeout(() => {\r\n        divMensaje.remove();\r\n      }, 3000);\r\n    }\r\n  \r\n    imprimirCitas(citas) {\r\n      this.limpiarHTML();\r\n  \r\n      citas.forEach(cita => {\r\n        const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;\r\n  \r\n        const divCita = document.createElement('div');\r\n        divCita.classList.add('cita', 'p-3');\r\n        divCita.dataset.id = id;\r\n  \r\n        const mascotaParrafo = document.createElement('h2');\r\n        mascotaParrafo.classList.add('card-title', 'font-weight-bolder');\r\n        mascotaParrafo.textContent = mascota;\r\n  \r\n        const propietarioParrafo = document.createElement('p');\r\n        propietarioParrafo.innerHTML = `\r\n          <span class=\"font-weight-bolder\">Propietario:</span> ${propietario}\r\n        `;\r\n  \r\n        const telefonoParrafo = document.createElement('p');\r\n        telefonoParrafo.innerHTML = `\r\n          <span class=\"font-weight-bolder\">Teléfono:</span> ${telefono}\r\n        `;\r\n  \r\n        const fechaParrafo = document.createElement('p');\r\n        fechaParrafo.innerHTML = `\r\n          <span class=\"font-weight-bolder\">Fecha:</span> ${fecha}\r\n        `;\r\n  \r\n        const horaParrafo = document.createElement('p');\r\n        horaParrafo.innerHTML = `\r\n          <span class=\"font-weight-bolder\">Hora:</span> ${hora}\r\n        `;\r\n  \r\n        const sintomasParrafo = document.createElement('p');\r\n        sintomasParrafo.innerHTML = `\r\n          <span class=\"font-weight-bolder\">Síntomas:</span> ${sintomas}\r\n        `;\r\n  \r\n        const btnEliminar = document.createElement('button');\r\n        btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');\r\n        btnEliminar.innerHTML = 'Eliminar';\r\n        btnEliminar.onclick = () => eliminarCita(id);\r\n  \r\n        divCita.appendChild(mascotaParrafo);\r\n        divCita.appendChild(propietarioParrafo);\r\n        divCita.appendChild(telefonoParrafo);\r\n        divCita.appendChild(fechaParrafo);\r\n        divCita.appendChild(horaParrafo);\r\n        divCita.appendChild(sintomasParrafo);\r\n        divCita.appendChild(btnEliminar);\r\n  \r\n        this.listaCitas.appendChild(divCita);\r\n      });\r\n    }\r\n  \r\n    limpiarHTML() {\r\n      while (this.listaCitas.firstChild) {\r\n        this.listaCitas.removeChild(this.listaCitas.firstChild);\r\n      }\r\n    }\r\n  }\r\n  \r\n  \n\n//# sourceURL=webpack://proyectofinalpaparelo/./src/UI.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _citas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./citas.js */ \"./src/citas.js\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n\n\n\nconst ui = new _UI_js__WEBPACK_IMPORTED_MODULE_1__.UI();\nconst administrarCitas = new _citas_js__WEBPACK_IMPORTED_MODULE_0__.Citas();\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  ui.imprimirCitas(administrarCitas.getCitas());\n});\n\nconst nuevaCitaForm = document.querySelector('#nueva-cita');\nnuevaCitaForm.addEventListener('submit', agregarCita);\n\nfunction agregarCita(e) {\n  e.preventDefault();\n\n  const mascotaInput = document.querySelector('#mascota');\n  const propietarioInput = document.querySelector('#propietario');\n  const telefonoInput = document.querySelector('#telefono');\n  const fechaInput = document.querySelector('#fecha');\n  const horaInput = document.querySelector('#hora');\n  const sintomasInput = document.querySelector('#sintomas');\n\n  const mascota = mascotaInput.value;\n  const propietario = propietarioInput.value;\n  const telefono = telefonoInput.value;\n  const fecha = fechaInput.value;\n  const hora = horaInput.value;\n  const sintomas = sintomasInput.value;\n\n  if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {\n    ui.imprimirAlerta('Todos los campos son obligatorios', 'error');\n    return;\n  }\n\n  const cita = {\n    id: Date.now(),\n    mascota,\n    propietario,\n    telefono,\n    fecha,\n    hora,\n    sintomas\n  };\n\n  administrarCitas.agregarCita(cita);\n\n  ui.imprimirAlerta('Cita agregada correctamente');\n\n  ui.imprimirCitas(administrarCitas.getCitas());\n\n  nuevaCitaForm.reset();\n}\n\nfunction eliminarCita(id) {\n  administrarCitas.eliminarCita(id);\n  ui.imprimirCitas(administrarCitas.getCitas());\n}\n\n//# sourceURL=webpack://proyectofinalpaparelo/./src/app.js?");

/***/ }),

/***/ "./src/citas.js":
/*!**********************!*\
  !*** ./src/citas.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Citas: () => (/* binding */ Citas),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Citas);\r\n\r\nclass Citas {\r\n    constructor() {\r\n      this.citas = [];\r\n    }\r\n  \r\n    agregarCita(cita) {\r\n      this.citas = [...this.citas, cita];\r\n    }\r\n  \r\n    eliminarCita(id) {\r\n      this.citas = this.citas.filter(cita => cita.id !== id);\r\n    }\r\n  \r\n    getCitas() {\r\n      return this.citas;\r\n    }\r\n  }\r\n  \r\n  \n\n//# sourceURL=webpack://proyectofinalpaparelo/./src/citas.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;