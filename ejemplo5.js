let n1 = 5;
let n2 = 4;
let operacion = 0
let respuesta = 5  // resta

if (respuesta === 1){
    operacion = n1 + n2; 
}else if (respuesta === 2){
    operacion = n1 - n2;
}else if (respuesta === 3){
    operacion = n1 * n2;
}else if(respuesta === 4){
    operacion = n1 / n2;
}else{
    operacion = "Opción no existe"
}

console.log("El resultado es : " + operacion);