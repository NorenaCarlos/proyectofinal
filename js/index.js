let productos = [
  { 
    nombre: 'Bi pro lite y burner stack', precio: 289000, categoria: 'Control de peso', stock: 5, imagen: 'controlPeso/bioprolite.png'},
  {
    nombre: 'Burner Stack Display',precio: 119900, categoria: 'Control de peso', stock: 5, imagen: 'controlPeso/burnerstackdisplay.png'
  },
  { 
    nombre: 'Burner Stack Lata', precio: 189600, categoria: 'Control de peso', stock: 5, imagen: 'controlPeso/burnerstacklata.png'
  },
  {
    nombre: 'Burner Stack', precio: 139900, categoria: 'Control de peso', stock: 5, imagen: 'controlPeso/burnerstack.png'
  },
  {
    nombre: 'Bipro classic 3lb capuccino & crema de whisky', precio:209990, categoria: 'Modulos proteicos', stock: 5, imagen: 'modulosProteicos/biproclassic3lbcapuccino&cremadewhisky.png'
  },
  {
    nombre: 'Bipro complex vainilla 2.1 lb', precio:149990, categoria: 'Modulos proteicos', stock: 5, imagen: 'modulosProteicos/biprocomplexvainilla2.1lb.png'
  },
  {
    nombre: 'Bipro classic display', precio:79900, categoria: 'Modulos proteicos', stock: 5, imagen: 'modulosProteicos/biproclassicdisplay.png' 
  },
  {
    nombre:'Bipro classic 3lb piña colada', precio: 209990, categoria: 'Modulos proteicos', stock: 5, imagen: 'modulosProteicos/biproclassic3lbpiñacolada.png'
  },
  {
    nombre: 'Collagen stack', precio: 99990, categoria: 'nutrición general', stock: 5, imagen: 'nutricionGeneral/collagenstack.png'
  },
  {
    nombre: 'Nutra-c', precio:64990, categoria: 'nutrición general', stock: 5, imagen: 'nutricionGeneral/nutrac.png'
  },
  {
    nombre: 'Nut-rx', precio: 34990, categoria: 'nutrición general', stock: 5, imagen: 'nutricionGeneral/nutrx.png'
  },
  {
    nombre: 'Zolé', precio: 29990, categoria: 'nutrición general', stock: 5, imagen: 'nutricionGeneral/zole.png'
  }
];
window.onload = function() {
  // Guardar datos en localStorage
  console.log(typeof(productos));
  localStorage.setItem('productos', JSON.stringify(productos));
  console.log(localStorage.getItem('productos'));
} 

