let productos = [
  { nombre: "Camiseta", precio: 25 },
  { nombre: "Pantalón", precio: 40 },
  { nombre: "Zapatos", precio: 60 },
  { nombre: "Gorra", precio: 15 }
];


let productosCostosos = productos.filter(producto => producto.precio >= 40);
console.log(productosCostosos);