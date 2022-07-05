/* 
José Luis Churruarin - División G
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let textoIngresado;
	textoIngresado = prompt("Ingrese un dato:");
	document.getElementById("txtIdNombre").value= textoIngresado;
}

