/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value; Solo en chrome.
	nombreIngresado=document.getElementById("txtIdNombre").value; // Funciona en cualquier navegador.
	alert(nombreIngresado);

}


