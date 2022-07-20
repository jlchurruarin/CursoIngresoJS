/**
 * José Luis Churruarin
 * al seleccionar un mes informar.
 * si es Enero: "que comiences bien el año!!!."
 * si es Marzo: "a clases!!!."
 * si es Julio: "se vienen las vacaciones!!!."
 * si es Diciembre: "Felices fiesta!!!."
 */

function mostrar()
{
	let mesSelecionado;
	let mensajeAMostrar;

	mesSelecionado = document.getElementById("txtIdMes").value;

	switch(mesSelecionado) 
	{
		case "Enero":
			mensajeAMostrar = "que comiences bien el año!!.";
			break;
		case "Marzo":
			mensajeAMostrar = "a clases!!!.";
			break;
		case "Julio":
			mensajeAMostrar = "se vienen las vacaciones!!!.";
			break;
		case "Diciembre":
			mensajeAMostrar = "Felices fiesta!!!.";
			break;
		default:
			mensajeAMostrar = "";
			break;
	}

	alert(mensajeAMostrar);

}//FIN DE LA FUNCIÓN