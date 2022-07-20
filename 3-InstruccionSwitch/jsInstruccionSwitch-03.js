/**
 * José Luis Churruarin
 * Enunciado:
 * al seleccionar un mes informar.
 * si es Febrero: " Este mes no tiene más de 29 días."
 * si NO es Febrero: "Este mes tiene 30 o más días"
 */

function mostrar()
{
	let mesSelecionado;
	let mensajeAMostrar;

	mesSelecionado = document.getElementById("txtIdMes").value;

	switch(mesSelecionado) 
	{
		case "Febrero":
			mensajeAMostrar = "Este mes no tiene más de 29 días.";
			break;
		default:
			mensajeAMostrar = "Este mes tiene 30 o más días";
			break;
	}
	
	alert(mensajeAMostrar);


}//FIN DE LA FUNCIÓN