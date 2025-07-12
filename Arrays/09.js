let productos = [
  { nombre: "Camiseta", precio: 25 },
  { nombre: "Pantalón", precio: 40 },
  { nombre: "Zapatos", precio: 60 }
];

let productosIVA = productos.map(function(precioFinal) {

    return Math.round(precioFinal.precio * 1.19);
})

console.log (productos);
console.log(productosIVA);