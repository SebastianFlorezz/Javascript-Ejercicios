let puntajes = [120, 340, 150, 200, 90, 400];

function comparar(a, b) {
    return b - a;
}
puntajes.sort(comparar);

const ultimoElemento = puntajes.slice(-1)[0];

console.log("El puntaje más alto es: " + puntajes[0]);
console.log("El puntaje más bajo es: " + ultimoElemento);

console.log("Puntajes ordenados: " + puntajes.join(", "));