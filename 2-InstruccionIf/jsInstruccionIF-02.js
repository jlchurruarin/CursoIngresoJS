/*
José Luis Churruarin
Al ingresar una edad debemos informar solo si la persona es mayor de edad 
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
	}
	
}//FIN DE LA FUNCIÓN