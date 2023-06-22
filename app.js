// // Definir eventos y funciones de respuesta
// document.addEventListener("DOMContentLoaded", cargarPagina);

// function cargarPagina() {
//   // Agregar eventos a los botones del menú
//   document.getElementById("sumarBtn").addEventListener("click", sumar);
//   document.getElementById("restarBtn").addEventListener("click", restar);
//   document.getElementById("multiplicarBtn").addEventListener("click", multiplicar);
//   document.getElementById("dividirBtn").addEventListener("click", dividir);

//   // Recuperar datos almacenados en el storage, si existen
//   let resultadoGuardado = localStorage.getItem("resultado");
//   if (resultadoGuardado) {
//     mostrarResultado(resultadoGuardado);
//   }
// }

// // Funciones esenciales
// function sumar() {
//   let num1 = prompt("Ingrese el primer número:");
//   let num2 = prompt("Ingrese el segundo número:");

//   let resultado = parseFloat(num1) + parseFloat(num2);

//   // Almacenar resultado en el storage
//   localStorage.setItem("resultado", resultado);

//   mostrarResultado(resultado);
// }

// function restar() {
//   let num1 = prompt("Ingrese el primer número:");
//   let num2 = prompt("Ingrese el segundo número:");

//   let resultado = parseFloat(num1) - parseFloat(num2);

//   localStorage.setItem("resultado", resultado);

//   mostrarResultado(resultado);
// }

// function multiplicar() {
//   let num1 = prompt("Ingrese el primer número:");
//   let num2 = prompt("Ingrese el segundo número:");

//   let resultado = parseFloat(num1) * parseFloat(num2);

//   localStorage.setItem("resultado", resultado);

//   mostrarResultado(resultado);
// }

// function dividir() {
//   let num1 = prompt("Ingrese el primer número:");
//   let num2 = prompt("Ingrese el segundo número:");

//   let resultado = parseFloat(num1) / parseFloat(num2);

//   localStorage.setItem("resultado", resultado);

//   mostrarResultado(resultado);
// }

// // Mostrar resultado en la página
// function mostrarResultado(resultado) {
//   let output = document.getElementById("output");
//   output.textContent = "El resultado es: " + resultado;
// }

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTasks(response.data);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: tasks.length + 1,
        title: newTask,
        completed: false
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter(task => task.completed);
  const incompleteTasks = tasks.filter(task => !task.completed);

  return (
    <div>
      <h1>Lista de Tareas</h1>

      <input type="text" value={newTask} onChange={event => setNewTask(event.target.value)} placeholder="Agregar nueva tarea" />
      <button onClick={addTask}>Agregar</button>

      <h2>Tareas Completadas</h2>
      <ul>
        {completedTasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            <span style={{ textDecoration: 'line-through' }}>{task.title}</span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <h2>Tareas Incompletas</h2>
      <ul>
        {incompleteTasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            <span>{task.title}</span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));