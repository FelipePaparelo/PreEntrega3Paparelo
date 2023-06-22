let fecha = new Date();
let año = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate();
document.getElementById("reloj").innerHTML = dia + "/" + mes + "/" + año;

// JSON
document.addEventListener("DOMContentLoaded", ()=>{
    if (localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))    
    }
    actualizarCarrito()    
})

//Informacion cliente

class cliente {
    constructor(nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}

//Productos
let carrito = []


const contenedor = document.getElementById("ropaDeportiva");
const tipoDeProductos = document.getElementById("producto")
const btn = document.getElementById(`btn`)
const url = `data.json`;
btn.addEventListener(`click`, reqData)
dataproducto=[];
function reqData() {
fetch(url)
.then ((res)=>res.json())
.then ((data)=>adder(data))
.catch((error)=>{
    console.error(error)
})}
function adder(data) {
    data.forEach((producto)=>{
        const div = document.createElement(`div`)
        div.innerHTML=`<img src=${producto.img}>
        <h4>${producto.nombre}</h4>
        <p>$${producto.precio}</p>
        <button id ="agregar${producto.id}" class="boton-agregar">AGREGAR</button>`
        
        contenedor.appendChild(div)

        const boton = document.getElementById(`agregar${producto.id}`);
        dataproducto.push(producto);
        boton.addEventListener(`click`, () => {
            agegarCarrito(producto.id)
            Toastify({
                text: "Se agrego el producto seleccionado",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
              }).showToast();
    })
})    
}    

//Agregar 

function agegarCarrito(prodId) {
    const item = dataproducto.find ((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    actualizarLocal()
}

//Eliminar

const eliminarDelCarrito = (prodId) => {
    const item = dataproducto.find ((prod)=> prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
    actualizarLocal()
}

//actualizacion del carro
const preciototal = document.getElementById("precioTotal")

const contenedorCarrito = document.getElementById(`carrito-contenedor`);

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML=""
    carrito.forEach((prod)=>{
    const div = document.createElement(`div`);
    div.className = (`productoEnCarrito`);
    div.innerHTML = `
    <ul class="lista"><li>${prod.nombre}
    Precio: ${prod.precio}</li>
    </ul><button onclick="eliminarDelCarrito(${prod.id})" id ="EliminarProducto">X</button>`
    
    contenedorCarrito.appendChild(div)
    });
    preciototal.innerText = carrito.reduce((acc, prod)=> acc + prod.precio, 0);
    

    };


const actualizarLocal = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

//Carrito

const botonvaciar = document.getElementById("vaciarcarro");
botonvaciar.addEventListener("click", () =>{
    carrito.length = 0;
    actualizarCarrito()
    actualizarLocal()
    });

const finCompra = document.getElementById("finCompra")
finCompra.addEventListener("click", () => {
    carrito.length=0
    actualizarCarrito()
    actualizarLocal()
    Swal.fire({
        title: "Perfecto",
        text: "La compra ha sido perfecta, te enviaremos un correo con la informacion",
        icon: "success",
        buttons: true,
        dangerMode: true,
    })
    .then((isOkay) => {
        if (isOkay) {
            form.submit();
            window.location.reload();
        }
    });
    return false;
})


