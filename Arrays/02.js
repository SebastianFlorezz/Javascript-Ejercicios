let colores = ["Rojo", "Verde", "Azul", "Amarillo"];

colores.unshift("Negro");
colores[4] = "Naranja";

for (color of colores){
    console.log(color)
}
