/*
José Luis Churruarin - División G
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let importeIngresado;
	let resultado;
	let porcentaje;
	let aumento;

	porcentaje = prompt("Ingrese el porcentaje de aumento");
	porcentaje = parseFloat(porcentaje);

	importeIngresado = document.getElementById("txtIdSueldo").value;
	importeIngresado = parseInt(importeIngresado);
	aumento = porcentaje * importeIngresado / 100; 	// Calculamos el porcentaje
	resultado = aumento + importeIngresado; 	// Sumamos el porcentaje al valor iniciar
	document.getElementById("txtIdResultado").value = resultado;

}
