// scripts.js

// Datos de ejemplo para productos y ventas
let productos = [];
let ventas = [];
let resurtidos = [];

// Función para mostrar secciones
function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => seccion.style.display = 'none');
    document.getElementById(seccionId).style.display = 'block';
    if (seccionId === 'productos') cargarProductos();
    if (seccionId === 'ventas') cargarProductosVenta();
    if (seccionId === 'resurtidos') cargarProductosResurtido();
    if (seccionId === 'reportes') generarReporte();
}

// Función para registrar producto
function registrarProducto(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseInt(document.getElementById('cantidad').value);
    productos.push({ nombre, categoria, precio, cantidad });
    document.getElementById('producto-form').reset();
    cargarProductos();
    alert('Producto registrado con éxito.');
}

// Función para cargar productos en tabla
function cargarProductos() {
    const tbody = document.querySelector('#productos-tabla tbody');
    tbody.innerHTML = '';
    productos.forEach((producto, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td>${producto.precio.toFixed(2)}</td>
            <td>${producto.cantidad}</td>
            <td><button onclick="eliminarProducto(${index})">Eliminar</button></td>
        </tr>`;
    });
}
