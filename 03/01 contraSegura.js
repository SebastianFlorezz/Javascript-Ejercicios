/* Estás creando una aplicación que necesita validar contraseñas.

➡️ Reto:
Crea una función que reciba una contraseña como string y devuelva true si:

Tiene al menos 8 caracteres.

Contiene al menos una letra mayúscula.

Contiene al menos un número.

De lo contrario, debe devolver false. */




function passwordValidator(password){
    let passwordLength = false;
    let passwordCapital = false;
    let passwordNumber = false;
    let isValid = false;

    function isCapital(letra) {
    return letra === letra.toUpperCase()  && letra !== letra.toLowerCase()
    }

    if (password.length >= 8) {
        passwordLength = true;
    } else {
        passwordLength =  false;
    }
    
     for (letter of password){
        isCapital(letter);
        if (isCapital(letter) === true) {
            passwordCapital = true;
        }

    }

    for (letter of password){
        if (!isNaN(letter) && letter !== "") {
            passwordNumber = true;
        }
    }

    if (passwordCapital === true && passwordLength === true && passwordNumber === true) {
        isValid = true;
    }

    return isValid
}



let verificator = passwordValidator("Sebastian29");

if (!verificator) {
    console.log("La contraseña debe contener al menos: \n - 8 Caracteres. \n - Una letra mayúscula. \n -Un número.");
} else {
    console.log("Contraseña valida");
}
