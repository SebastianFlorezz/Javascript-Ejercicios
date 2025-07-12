
let edades = [18, 22, 15, 30, 25, 17];

let nuevasEdades = [];
for (edad of edades){
    if(edad >= 18){
        nuevasEdades.push(edad)
    }
}
console.log(nuevasEdades);