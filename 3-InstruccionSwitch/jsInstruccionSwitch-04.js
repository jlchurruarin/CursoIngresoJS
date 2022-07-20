/**
 * José Luis Churruarin
 * al seleccionar un mes informar.
 * si tiene 28 días.
 * si tiene 30 días.
 * si tiene 31 días.
 */

function mostrar()
{
	let mesSelecionado;
	let mensajeAMostrar;

	mesSelecionado = document.getElementById("txtIdMes").value;

	switch(mesSelecionado) 
	{
		case "Febrero":
			mensajeAMostrar = "Tiene 28 días.";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensajeAMostrar = "Tiene 30 días.";
			break;
		default:
			mensajeAMostrar = "Tiene 31 días";
			break;
	}
	
	alert(mensajeAMostrar);

}//FIN DE LA FUNCIÓN