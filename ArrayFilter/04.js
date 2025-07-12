/* Filtra los usuarios que:

Sean mayores de edad (edad >= 18).
Estén activos.
Hayan realizado al menos 1 compra (compras > 0).

De los usuarios filtrados, crea un nuevo array donde el mensaje sea: "Gracias Carlos por tus 5 compras."
*/

let usuarios = [
  { nombre: "Carlos", edad: 25, activo: true, compras: 5 },
  { nombre: "Laura", edad: 17, activo: false, compras: 0 },
  { nombre: "Andrés", edad: 30, activo: true, compras: 8 },
  { nombre: "María", edad: 20, activo: false, compras: 2 },
  { nombre: "Sofía", edad: 28, activo: true, compras: 10 },
  { nombre: "Miguel", edad: 19, activo: true, compras: 0 }
];

let usuariosActivosLegalesCompradores = usuarios.filter(usuario => usuario.edad >= 18 && usuario.compras > 0 && usuario.activo);

let mensaje = usuariosActivosLegalesCompradores.map(function(usuario) {
    return `Gracias ${usuario.nombre} por tus ${usuario.compras} compras.`
})

console.log(usuariosActivosLegalesCompradores);
console.log(mensaje);