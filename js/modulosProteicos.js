const productos = JSON.parse(localStorage.getItem('productos'));
console.log(productos);
console.log(typeof(productos));
window.onload = function() {
  productos.forEach(element => {
    if(element.categoria === 'Modulos proteicos') {
      console.log(element.imagen);
      let div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
      <img src="${element.imagen}" alt="${element.nombre}" width=100px height=100px>
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