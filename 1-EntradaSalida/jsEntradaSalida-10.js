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
	let porcentaje;
	let descuento;

	porcentaje = prompt("Ingrese el porcentaje de descuento:");
	porcentaje = parseFloat(porcentaje);

	importeIngresado = document.getElementById("txtIdImporte").value;
	importeIngresado = parseFloat(importeIngresado);
	descuento = porcentaje * importeIngresado / 100; // Calculamos el descuento
	resultado = importeIngresado - descuento; // restamos el descuento al valor inicial

	document.getElementById("txtIdResultado").value = resultado;
}
