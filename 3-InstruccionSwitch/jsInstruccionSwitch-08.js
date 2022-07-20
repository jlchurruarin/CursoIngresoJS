/**
 * José Luis Churruarin
 * Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
 */

function mostrar()
{
	let destinoIngresado =txtIdDestino.value;
	let mensajeAMostrar;

	mensajeAMostrar = "En el destino hace ";

	switch(destinoIngresado)
	{
		case "Ushuaia":
		case "Bariloche":
			mensajeAMostrar += "frio";
			break;
		case "Cataratas":
		case "Mar del plata":
			mensajeAMostrar += "calor";
			break;

	}

	alert(mensajeAMostrar);

}//FIN DE LA FUNCIÓN