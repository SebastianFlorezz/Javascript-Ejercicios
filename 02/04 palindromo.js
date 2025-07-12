//Determina si un string es palindromo


function palindromo(){
    let cadena = "Oso";
    let resultado = "";

    for (let i = cadena.length - 1; i >= 0; i--) {
    resultado += cadena[i];
    }
    
    if (resultado === cadena){
        console.log("Si es palindromo")
    } else {
        console.log("No es palindromo")
    }
}

palindromo()