function comparar(a, b) {
    return b.nota - a.nota;
}

let estudiantes = [
    { nombre: "Carlos", nota: 4.5 },
    { nombre: "Laura", nota: 3.2 },
    { nombre: "Andrés", nota: 2.8 },
    { nombre: "Mariana", nota: 5.0 },
    { nombre: "Sofía", nota: 3.9 },
];

let estudiantesAprovados = [];

for (estudiante of estudiantes){
    if (estudiante.nota >= 3){
        estudiantesAprovados.push(estudiante);
    }
}

estudiantesAprovados.sort(comparar);

for (estudiante of estudiantesAprovados){
    console.log(`Estudiante: ${estudiante.nombre} -Nota: ${estudiante.nota}`)
}

