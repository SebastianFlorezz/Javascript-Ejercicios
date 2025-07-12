// Par o impar

let numeroUsuario = 21;

function parImpar(){
    if (numeroUsuario%2 == 0){
        console.log(`El numero ${numeroUsuario} es par.`);
    } else if (numeroUsuario%2 != 0){
        console.log(`El numero ${numeroUsuario} es impar.`);
    } else{
        console.log("Introduce un numero valido");
    }
}

parImpar() 