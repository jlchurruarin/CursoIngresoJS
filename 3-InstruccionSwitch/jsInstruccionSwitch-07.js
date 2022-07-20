/**
 * José Luis Churruarin
 * Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
 */

function mostrar()
{
	let destinoIngresado =txtIdDestino.value;
	let mensajeAMostrar;

	mensajeAMostrar = "El destino se encuentra al ";

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensajeAMostrar += "oeste del pais";
			break;
		case "Cataratas":
			mensajeAMostrar += "norte del pais";
			break;
		case "Mar del plata":
			mensajeAMostrar += "este del pais";
			break;
		case "Ushuaia":
			mensajeAMostrar += "sur del pais";
			break;
	}

	alert(mensajeAMostrar);

}//FIN DE LA FUNCIÓN