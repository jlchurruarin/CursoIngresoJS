/**
 * José Luis Churruarin
 * al seleccionar un mes informar.
 * si estamos en Invierno: "Abrigate que hace frio."
 * si aún no llego el Invierno: "Falta para el invierno."
 * si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
 * ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
 */
function mostrar()
{
	let mesSelecionado;
	let mensajeAMostrar;

	mesSelecionado = document.getElementById("txtIdMes").value;

	switch(mesSelecionado) 
	{
		case "Julio":
		case "Agosto":
			mensajeAMostrar = "Abrigate que hace frio.";
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensajeAMostrar = "Ya pasamos el frio, ahora calor!!!.";
			break;
		default:
			mensajeAMostrar = "Falta para el invierno.";
			break;
	}

	alert(mensajeAMostrar);

}//FIN DE LA FUNCIÓN