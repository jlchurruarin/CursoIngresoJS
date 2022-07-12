/*
José Luis Churruarin
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
	//tomo la edad  
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada < 13) {
		alert("Eres un niño");
	} else {
		if (edadIngresada < 18) {
			alert("Eres un adolescente");
		} else {
			alert("Eres mayor de edad");
		}
	}

}//FIN DE LA FUNCIÓN