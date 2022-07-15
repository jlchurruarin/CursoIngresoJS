/**
 * José Luis Churruarin
 * Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
 * pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
 */

function mostrar()
{
	//tomo la edad  
	let edadIngresada;
	let estadoCivilSeleccionado;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	estadoCivilSeleccionado = document.getElementById("estadoCivil").value;

	if(edadIngresada >= 18 && estadoCivilSeleccionado == "Soltero") 
	{
		alert("Es soltero y no es menor.");
	}

}//FIN DE LA FUNCIÓN