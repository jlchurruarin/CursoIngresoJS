/**
 * José Luis Churruarin
 * Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
 * "EXCELENTE" para notas igual a 9 o 10,
 * "APROBÓ" para notas mayores a 4,
 * "Vamos, la proxima se puede" para notas menores a 4
 */

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numeroRandom;
	let numeroRandomMinimo;
	let numeroRandomMaximo;

	numeroRandomMinimo = 1;
	numeroRandomMaximo = 10;

	numeroRandom = Math.floor(Math.random() * (numeroRandomMaximo + 1 - numeroRandomMinimo)) + numeroRandomMinimo;

	if(numeroRandom < 4) {
		alert("NOTA: " + numeroRandom + " - Vamos, la proxima se puede");
	} else {
		if (numeroRandom < 9) {
			alert("NOTA: " + numeroRandom + " - APROBÓ");	// El enunciado no lo especifica, pero consideramos que con nota mayor igual a 4 se aprueba
		} else {
			alert("NOTA: " + numeroRandom + " - EXCELENTE");
		}
	}

}//FIN DE LA FUNCIÓN