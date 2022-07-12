/*
José Luis Churruarin
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
	//tomo la edad  
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada >= 13 ) 
	{
		if (edadIngresada <= 17) {
			alert("Eres adolescente");
		}
	}

}//FIN DE LA FUNCIÓN