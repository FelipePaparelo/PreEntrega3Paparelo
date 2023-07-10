import administrarCitas from "./app.js";

class UI {
  constructor() {
    this.textoHeading = document.querySelector('#administra');
    this.textoAlerta = document.querySelector('#alerta');
    this.listaCitas = document.querySelector('#citas');
  }

  imprimirAlerta(mensaje, tipo) {
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('alert', 'text-center', 'd-block', 'col-12');

    if (tipo === 'error') {
      divMensaje.classList.add('alert-danger');
    } else {
      divMensaje.classList.add('alert-success');
    }

    divMensaje.textContent = mensaje;

    this.textoHeading.parentNode.insertBefore(divMensaje, this.textoHeading.nextSibling);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  imprimirCitas(citas) {
    this.limpiarHTML();

    citas.forEach(cita => {
      const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

      const divCita = document.createElement('div');
      divCita.classList.add('cita', 'p-3');
      divCita.dataset.id = id;

      const mascotaParrafo = document.createElement('h2');
      mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
      mascotaParrafo.textContent = mascota;

      const propietarioParrafo = document.createElement('p');
      propietarioParrafo.innerHTML = `
        <span class="font-weight-bolder">Propietario:</span> ${propietario}
      `;

      const telefonoParrafo = document.createElement('p');
      telefonoParrafo.innerHTML = `
        <span class="font-weight-bolder">Teléfono:</span> ${telefono}
      `;

      const fechaParrafo = document.createElement('p');
      fechaParrafo.innerHTML = `
        <span class="font-weight-bolder">Fecha:</span> ${fecha}
      `;

      const horaParrafo = document.createElement('p');
      horaParrafo.innerHTML = `
        <span class="font-weight-bolder">Hora:</span> ${hora}
      `;

      const sintomasParrafo = document.createElement('p');
      sintomasParrafo.innerHTML = `
        <span class="font-weight-bolder">Síntomas:</span> ${sintomas}
      `;

      const btnEliminar = document.createElement('button');
      btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
      btnEliminar.innerHTML = 'Eliminar';
      btnEliminar.onclick = () => this.eliminarCita(id); 

      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioParrafo);
      divCita.appendChild(telefonoParrafo);
      divCita.appendChild(fechaParrafo);
      divCita.appendChild(horaParrafo);
      divCita.appendChild(sintomasParrafo);
      divCita.appendChild(btnEliminar);

      this.listaCitas.appendChild(divCita);
    });
  }

  limpiarHTML() {
    while (this.listaCitas.firstChild) {
      this.listaCitas.removeChild(this.listaCitas.firstChild);
    }
  }

  eliminarCita(id) {
    administrarCitas.eliminarCita(id); 
    this.imprimirCitas(administrarCitas.getCitas()); 
  }
}

export default UI;