alert("Simulador de cuotas");

let prod = parseInt(prompt("Ingrese Valor del producto"));
let cant = prompt("Ingrese cantidad de cuotas (3, 6, 12 o 18)")

if (cant === "3") {
    alert("El interés es de 5%, serían 3 cuotas de: " + prod * 1.05 / 3);
}
else if (cant === "6") {
    alert("El interés es de 20%, serían 6 cuotas de: " + prod * 1.2 / 6);
}
else if (cant === "12") {
    alert("El interés es de 40%, serían 12 cuotas de: " + prod * 1.4 / 12);
}
else if (cant === "18") {
    alert("El interés es de 60%, serían 18 cuotas de: " + prod * 1.6 / 18);
}
else {alert("No se puede calcular esa cantidad de cuotas, por favor verifique los datos ingresados")}
