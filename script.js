function agregar(producto) {
   alert("Agregaste: " + producto + " al carrito 🍨");
}
function toggleMenu() {
   document.getElementById("navLinks").classList.toggle("show");
}
let carrito = [];
let total = 0;

function agregar(producto) {
    let precio = 0;

    if (producto === "Helado de Café") precio = 55;
    if (producto === "Helado de Moras") precio = 45;
    if (producto === "Helado de Galleta") precio = 50;

    carrito.push({ nombre: producto, precio });

    total += precio;

    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("listaCarrito");
    const contador = document.getElementById("contadorCarrito");
    const totalHTML = document.getElementById("totalCarrito");

    lista.innerHTML = "";

    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        li.onclick = () => eliminarProducto(index);
        lista.appendChild(li);
    });

    contador.textContent = carrito.length;
    totalHTML.textContent = total;
}

function eliminarProducto(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}

function toggleCarrito() {
    const carrito = document.getElementById("carrito");
    carrito.classList.toggle("activo");
}
