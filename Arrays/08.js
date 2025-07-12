let precios = [100, 200, 300];

let preciosConDescuento = precios.map(function (precio) {
    return precio * 0.9
});

console.log(precios);
console.log(preciosConDescuento);