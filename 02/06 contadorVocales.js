// Contador de vocales en una palabra

let palabra = "oso palenquErO";
palabra = palabra.toLowerCase(); // elimino las mayusculas de la variable "palabra"
let contador = 0

function contadorVocales() {
    for (let i = 0; i < palabra.length; i++) {
        switch(palabra[i]){
            case "a":
                contador = contador + 1;
                break;
            case "e":
                contador = contador + 1;
                break;
            case "i":
                contador = contador + 1;
                break;
            case "o":
                contador = contador + 1;
                break;
            case "u":
                contador = contador + 1;
                break;
            
        }

    }
}

contadorVocales()
console.log(`Palabra: ${palabra}`)
console.log(`Contador: ${contador}`)
