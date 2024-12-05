const productos = localStorage.getItem('productos');
console.log(productos);
window.onload = function() {
  productos.forEach(element => {
    if(element.categoria === 'Control de peso') {
      let div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
      <img src="img/${element.imagen}" class="card-img-top" alt="${element.nombre}">
      <div class="card-body">
        <h5 class="card-title">${element.nombre}</h5>
        <p class="card-text">Precio: ${element.precio}</p>
        <p class="card-text">Stock: ${element.stock}</p>
        <a href="#" class="btn btn-primary">Comprar</a>
      </div>
      `;
      document.getElementById('productos').appendChild(div);
    } 
  });
}