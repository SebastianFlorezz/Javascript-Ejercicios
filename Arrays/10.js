let personas = [
  { nombre: "Laura", edad: 23 },
  { nombre: "Carlos", edad: 17 },
  { nombre: "Ana", edad: 30 }
];


let mensajePersonalizado = personas.map(function(mensaje){
    return `Hola ${mensaje.nombre}, tu edad es ${mensaje.edad}`
});

console.log(personas);
console.log(mensajePersonalizado);