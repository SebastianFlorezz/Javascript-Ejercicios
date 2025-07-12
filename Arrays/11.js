let estudiantes = [
  { nombre: "Pedro", nota: 4.8 },
  { nombre: "María", nota: 2.9 },
  { nombre: "Juan", nota: 3.5 },
  { nombre: "Sofía", nota: 4.2 }
];

let mensaje = estudiantes.map(function(estudiante) {
  if(estudiante.nota >= 3){
    return `Felicidades ${estudiante.nombre}, has aprobado con una nota de ${estudiante.nota}.`
  } else {
    return `Lo siento ${estudiante.nombre}, has reprobado con una nota de ${estudiante.nota}`
  }
    
})

console.log(estudiantes);
console.log(mensaje);