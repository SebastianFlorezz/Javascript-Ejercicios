// ✅ Tarea:
//Crea un nuevo array que contenga solo los usuarios mayores de edad (18 o más) y que además estén activos.



let usuarios = [
  { nombre: "Carlos", edad: 25, activo: true },
  { nombre: "Laura", edad: 17, activo: false },
  { nombre: "Andrés", edad: 30, activo: true },
  { nombre: "María", edad: 20, activo: false },
  { nombre: "Sofía", edad: 28, activo: true }
];

let usuariosMayoresActivos = usuarios.filter(usuario => usuario.edad >= 18 && usuario.activo === true);
console.log(usuariosMayoresActivos);