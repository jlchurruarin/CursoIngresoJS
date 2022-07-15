/**
 * José Luis Churruarin
 * Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
 */

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numeroRandom;
	let numeroRandomMinimo;
	let numeroRandomMaximo;

	numeroRandomMinimo = 1;
	numeroRandomMaximo = 10;

	numeroRandom = Math.floor(Math.random() * numeroRandomMaximo) + numeroRandomMinimo;

	alert(numeroRandom);
}//FIN DE LA FUNCIÓN