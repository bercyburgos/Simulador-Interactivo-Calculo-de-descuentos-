//El objetivo del simulador sera calcular el descuento ingresado por el usuario a un valor tambien ingresado por el usuario
//El usuario solo debera ingresar los datos en el campo valor inicial y porcentaje de descuento, luego al dar clic en calcular traera los valores
//en los dos campos siguientes

function calcular(){
let valor =0;
let descuento =0;
let imp_desc = 0;
let total =0;

//Aqui se hace la asignacion del valor a la variable
valor= document.getElementById("valor").value;
descuento= document.getElementById("descuento").value;
//Este es el calculo del descuento 
imp_desc = (valor * descuento)/100;
document.getElementById("importe_descontado").value=imp_desc;
//Formula del calculo del total: monto inicial - importe del descuento de acuerdo al porcentaje del descuento
total = valor - imp_desc
//Asignación del valor de la variable total
document.getElementById("total").value=total;
if(valor>0){
    alert("El descuento para el producto ingresado es de "+imp_desc);
    alert("El total a pagar por el producto, con el descuento es "+total);
}else{
    alert("El valor ingresado para el calculo de su descuento debe ser mayor a 0")
}
}
