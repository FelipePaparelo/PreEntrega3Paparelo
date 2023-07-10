import Citas from './citas.js';
import UI from './UI.js';

const ui = new UI();
const administrarCitas = new Citas();

document.addEventListener('DOMContentLoaded', () => {
  ui.imprimirCitas(administrarCitas.getCitas());
});

const nuevaCitaForm = document.querySelector('#nueva-cita');
nuevaCitaForm.addEventListener('submit', agregarCita);

function agregarCita(e) {
  e.preventDefault();

  const mascotaInput = document.querySelector('#mascota');
  const propietarioInput = document.querySelector('#propietario');
  const telefonoInput = document.querySelector('#telefono');
  const fechaInput = document.querySelector('#fecha');
  const horaInput = document.querySelector('#hora');
  const sintomasInput = document.querySelector('#sintomas');

  const mascota = mascotaInput.value;
  const propietario = propietarioInput.value;
  const telefono = telefonoInput.value;
  const fecha = fechaInput.value;
  const hora = horaInput.value;
  const sintomas = sintomasInput.value;

  if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
    ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
    return;
  }

  const cita = {
    id: Date.now(),
    mascota,
    propietario,
    telefono,
    fecha,
    hora,
    sintomas
  };

  administrarCitas.agregarCita(cita);

  ui.imprimirAlerta('Cita agregada correctamente');

  ui.imprimirCitas(administrarCitas.getCitas());

  nuevaCitaForm.reset();
}

function eliminarCita(id) {
  // Utilizar fetch para eliminar la cita
  fetch(`URL_DEL_API/citas/${id}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        administrarCitas.eliminarCita(id);
        ui.imprimirCitas(administrarCitas.getCitas());
      } else {
        throw new Error('Error al eliminar la cita');
      }
    })
    .catch(error => {
      console.error(error);
      ui.imprimirAlerta('Error al eliminar la cita', 'error');
    });
}

export default administrarCitas;

