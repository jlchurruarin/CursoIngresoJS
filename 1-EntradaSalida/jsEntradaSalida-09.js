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

	importeIngresado = document.getElementById("txtIdSueldo").value;
	resultado = parseInt(importeIngresado) / 10; // Calculamos el 10%
	resultado = resultado + parseInt(importeIngresado); // sumamos el 10% al valor inicial
	document.getElementById("txtIdResultado").value = resultado;

}
