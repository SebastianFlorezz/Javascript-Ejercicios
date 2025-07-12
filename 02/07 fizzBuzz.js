/*
Muestra los números del 1 al 100, pero:

Si el número es múltiplo de 3, muestra "Fizz".

Si es múltiplo de 5, muestra "Buzz".

Si es múltiplo de ambos, muestra "FizzBuzz". */

function FizzBuzz(){
    for (let i = 1; i < 100 + 1; i++) {
        if ((i % 3 == 0)&&(i % 5 == 0) ){
            console.log("FizzBuzz")
        } else if (i % 3 == 0){
            console.log("Fizz");
        } else if (i % 5 == 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

FizzBuzz();
