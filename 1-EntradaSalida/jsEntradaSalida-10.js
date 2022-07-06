/*
José Luis Churruarin - División G
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importeIngresado;
	let resultado;

	importeIngresado = document.getElementById("txtIdImporte").value;
	resultado = parseInt(importeIngresado) / 4; // Calculamos el 25% (100/25)
	resultado = parseInt(importeIngresado) - resultado; // restamos el 25% al valor inicial
	document.getElementById("txtIdResultado").value = resultado;
}
