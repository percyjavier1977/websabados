let n1 = 8;
let n2 = 2;
let operacion = 0;
let respuesta = 4;

switch(respuesta){
    case 1:
        operacion = n1 + n2;
        break;
    case 2:
        operacion = n1 - n2;
        break;
    case 3:
        operacion = n1 * n2;
        break;
    case 4:
        if (n2!==0){
            operacion = n1 / n2;
        }else{
            console.log("Error: no se puede dividir un número entre cero")
            operacion = null;
        }
        break;
    default:
        console.log("Operación no valida")

}
if (operacion !==null ){
    console.log("El resultado es: " + operacion)
}else{
    console.log("FIN DE LA APLICACIÓN")
}
    