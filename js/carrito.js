let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let productos = JSON.parse(localStorage.getItem('productos')) || [];
let total = 0;
let totalItems = 0;


function obtenerProductoPorId(id){
  return productos.find(p => p.id == id);
}

window.onload = function() {
  carrito.forEach(element => {
    console.log(element.productoId);
    const producto = obtenerProductoPorId(element.productoId);
    total += producto.precio * element.cantidad;
    totalItems += element.cantidad;
    
    let div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('product-card');
    div.style = 'width: 18rem; margin: 10px; display: flex; justify-content: center; align-items: center;';
    
    const img = document.createElement('img');
    img.setAttribute('src', producto.imagen);
    img.style.marginTop = '20px';
    img.style.width = '200px';
    img.style.height = '200px';
    img.setAttribute('id', producto.id);
    div.appendChild(img);

    const button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'Eliminar del carrito');
    button.setAttribute('id', producto.id);
    button.setAttribute('class', 'btn btn-danger');
    button.style.width = '60%';
    button.style.marginBottom = '10px';
    button.addEventListener('click', function() {
      eliminarDelCarrito(producto.id);
    });

    div.appendChild(button);
    let contenedor = document.getElementById('carrito');
    if (contenedor) {
      contenedor.style = 'display: flex; flex-wrap: wrap; justify-content: center;';
      contenedor.appendChild(div);
    } else {
      console.error('No se encontró el contenedor de productos');
    }
  });
}


function eliminarDelCarrito(productoId){
  return function(){
    let index = carrito.findIndex(element => element.productoId === productoId);
    if(index !== -1){
      carrito.splice(index,1);
      localStorage.setItem('carrito',JSON.stringify(carrito));
      location.reload();
    }
  }
}



// function obtenerProductoPorId(id) {
//   // Implementa esta función para obtener el producto por ID
// }

function eliminarDelCarrito(productoId) {
  // Implementa esta función para eliminar el producto del carrito
}