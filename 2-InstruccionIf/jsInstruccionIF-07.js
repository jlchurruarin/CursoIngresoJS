/**
 * José Luis Churruarin
 * Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
 */

function mostrar()
{
	//tomo la edad  
	let edadIngresada;
	let estadoCivilSeleccionado;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	estadoCivilSeleccionado = document.getElementById("estadoCivil").value;

	if(edadIngresada < 18 && estadoCivilSeleccionado != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	} else {
		alert("Tienes " + edadIngresada + " años y tu estado civil es " + estadoCivilSeleccionado);
	}
	
}//FIN DE LA FUNCIÓN