let numeros = [5, 12, 8, 21, 7];

numeros.push(15)
numeros.shift()

sum = 0

for(numero in numeros){
    sum += numeros[numero]
}
console.log(sum)