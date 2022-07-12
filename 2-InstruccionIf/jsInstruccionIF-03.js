/*
José Luis Churruarin
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad. 
*/

function mostrar()
{
	//tomo la edad  
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada >= 18 ) 
	{
		alert("Eres mayor de edad");
	} else {
		alert("Eres menor de edad");
	}
	
}//FIN DE LA FUNCIÓN