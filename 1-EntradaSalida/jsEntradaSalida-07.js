/*
José Luis Churruarin - División G
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let suma;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	suma = parseInt(numeroUno) + parseInt(numeroDos);

	alert("La suma es: " + suma);
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resta;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	resta = parseInt(numeroUno) - parseInt(numeroDos);

	alert("La resta es: " + resta);	
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let multiplicacion;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	multiplicacion = parseInt(numeroUno) * parseInt(numeroDos);

	alert("La multiplicación es: " + multiplicacion);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let division;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	division = parseInt(numeroUno) / parseInt(numeroDos);

	alert("La división es: " + division);
}

