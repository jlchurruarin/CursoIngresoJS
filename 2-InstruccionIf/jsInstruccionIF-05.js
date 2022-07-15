/*
José Luis Churruarin
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
	//tomo la edad  
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada < 13 || edadIngresada > 17) 
	{
		alert("No eres adolescente");
	}


}//FIN DE LA FUNCIÓN