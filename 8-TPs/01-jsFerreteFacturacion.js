/*1.	Para el departamento de facturación:
José Luis Churruarin
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioProductoUno;
    let precioProductoDos;
    let precioProductoTres;
    let suma;

    precioProductoUno = document.getElementById("txtIdPrecioUno").value;
    precioProductoUno = parseFloat(precioProductoUno);
    precioProductoDos = document.getElementById("txtIdPrecioDos").value;
    precioProductoDos = parseFloat(precioProductoDos);
    precioProductoTres = document.getElementById("txtIdPrecioTres").value;
    precioProductoTres = parseFloat(precioProductoTres);

    suma = precioProductoUno + precioProductoDos + precioProductoTres;

    alert("La suma es: $" + suma);

}
function Promedio () 
{
    let precioProductoUno;
    let precioProductoDos;
    let precioProductoTres;
    let promedio;

    precioProductoUno = document.getElementById("txtIdPrecioUno").value;
    precioProductoUno = parseFloat(precioProductoUno);
    precioProductoDos = document.getElementById("txtIdPrecioDos").value;
    precioProductoDos = parseFloat(precioProductoDos);
    precioProductoTres = document.getElementById("txtIdPrecioTres").value;
    precioProductoTres = parseFloat(precioProductoTres);

    promedio = (precioProductoUno + precioProductoDos + precioProductoTres) / 3;

    alert("El promedio es: $" + promedio);
}
function PrecioFinal () 
{

    let precioProductoUno;
    let precioProductoDos;
    let precioProductoTres;
    let precioFinal;

    precioProductoUno = document.getElementById("txtIdPrecioUno").value;
    precioProductoUno = parseFloat(precioProductoUno);
    precioProductoDos = document.getElementById("txtIdPrecioDos").value;
    precioProductoDos = parseFloat(precioProductoDos);
    precioProductoTres = document.getElementById("txtIdPrecioTres").value;
    precioProductoTres = parseFloat(precioProductoTres);

    precioFinal = precioProductoUno + precioProductoDos + precioProductoTres;
    precioFinal = precioFinal * 1.21;

    alert("El precio final es: $" + precioFinal);

}