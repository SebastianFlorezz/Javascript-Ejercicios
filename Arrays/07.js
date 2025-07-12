//  map en array
numeros = [1, 3, 4, 5, 6, 7, 3, 1, 12];

let nuevoArray = numeros.map(function(numero) {
    return numero * numero;
});

console.log(numeros);
console.log(nuevoArray);