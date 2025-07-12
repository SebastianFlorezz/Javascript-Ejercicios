let estudiantes = [
  { nombre: "Pedro", nota: 4.8 },
  { nombre: "María", nota: 2.9 },
  { nombre: "Juan", nota: 3.5 },
  { nombre: "Sofía", nota: 4.2 }
];

let aprobados = estudiantes.filter(estudiante => estudiante.nota >= 3);
console.log(aprobados);