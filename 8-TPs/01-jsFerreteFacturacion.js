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
    let precioFinal;

    precioProductoUno = document.getElementById("txtIdPrecioUno").value;
    precioProductoUno = parseFloat(precioProductoUno);
    precioProductoDos = document.getElementById("txtIdPrecioDos").value;
    precioProductoDos = parseFloat(precioProductoDos);
    precioProductoTres = document.getElementById("txtIdPrecioTres").value;
    precioProductoTres = parseFloat(precioProductoTres);

    precioFinal = precioProductoUno + precioProductoDos + precioProductoTres;

    alert("La suma es: $" + precioFinal);

}
function Promedio () 
{
    let precioProductoUno;
    let precioProductoDos;
    let precioProductoTres;
    let precioPromedio;

    precioProductoUno = document.getElementById("txtIdPrecioUno").value;
    precioProductoUno = parseFloat(precioProductoUno);
    precioProductoDos = document.getElementById("txtIdPrecioDos").value;
    precioProductoDos = parseFloat(precioProductoDos);
    precioProductoTres = document.getElementById("txtIdPrecioTres").value;
    precioProductoTres = parseFloat(precioProductoTres);

    precioPromedio = (precioProductoUno + precioProductoDos + precioProductoTres) / 3;

    alert("El promedio es: $" + precioPromedio);
}
function PrecioFinal () 
{

    let precioProductoUno;
    let precioProductoDos;
    let precioProductoTres;
    let precioFinal;
    let precioIva;
    let porcentajeDeIva;

    porcentajeDeIva = 21

    precioProductoUno = document.getElementById("txtIdPrecioUno").value;
    precioProductoUno = parseFloat(precioProductoUno);
    precioProductoDos = document.getElementById("txtIdPrecioDos").value;
    precioProductoDos = parseFloat(precioProductoDos);
    precioProductoTres = document.getElementById("txtIdPrecioTres").value;
    precioProductoTres = parseFloat(precioProductoTres);

    precioFinal = precioProductoUno + precioProductoDos + precioProductoTres;
    precioIva = (porcentajeDeIva * precioFinal / 100);
    precioFinal = precioFinal + precioIva;


    alert("El precio final es: $" + precioFinal);

}