/**
 * Jose Luis Churruarin
 * Al ingresar una hora, informar:
 * si está entre las 7 y las 11 : "Es de mañana.".
 */

function mostrar()
{
	let horaDelDia =txtIdHora.value;
	let mensajeAMostrar;

	switch(horaDelDia) {
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensajeAMostrar = "Es de mañana.";
			break;
		default:
			mensajeAMostrar = "No es de mañana.";
			break;
	}

	alert(mensajeAMostrar);
	
}//FIN DE LA FUNCIÓN