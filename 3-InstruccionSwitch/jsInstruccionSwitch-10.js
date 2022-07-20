/**
 * José Luis Churruarin
 * una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 
 * informar si "Se viaja" o "No se viaja" a ese lugar
 * en Invierno: 	Solo Bariloche informa "se viaja" 
 * 					los demas destinos "No se viaja"
 * 
 * en Verano: 		Se viaja a Mar del plata y Cataratas solamente
 * 
 * en Otoño: Se viaja a todos los destinos.
 * 
 * primavera: solo no se viaja a Bariloche
 */

function mostrar()
{
	let estacionSeleccionada =txtIdEstacion.value;
	let destinoSeleccionado =txtIdDestino.value;
	let mensajeAMostrar;

	mensajeAMostrar = "No se viaja";

	switch(estacionSeleccionada) 
	{
		case "Invierno":
			switch(destinoSeleccionado) 
			{
				case "Bariloche":
					mensajeAMostrar = "Se viaja";
					break;
			}
			break;
		case "Verano":
			switch(destinoSeleccionado)
			{
				case "Mar del plata":
				case "Cataratas":
					mensajeAMostrar = "Se viaja";
					break;
			}
			break;
		case "Primavera":
			switch(destinoSeleccionado)
			{
				case "Bariloche":
					mensajeAMostrar = "Se viaja";
					break;
			}
			break;
		default:
			mensajeAMostrar= "Se viaja";
			break;
	}

	alert(mensajeAMostrar);

}//FIN DE LA FUNCIÓN