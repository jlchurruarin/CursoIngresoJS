/* José Luis Churruarin
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let largoAlambre;
    let cantidadDeHilos;

    cantidadDeHilos = 3; // Cantidad de hilos de alambre con la que se debe alambrar

    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);

    perimetro = (largo + ancho) * 2;
    largoAlambre = perimetro * cantidadDeHilos;

    alert("Se necesitan " + largoAlambre + " metros de alambre");

}
function Circulo () 
{
    let radio;
    let perimetro;
    let largoAlambre;
    let cantidadDeHilos;

    cantidadDeHilos = 3; // Cantidad de hilos de alambre con la que se debe alambrar

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);
    perimetro = parseFloat(radio * 2 * Math.PI);
    largoAlambre = perimetro * cantidadDeHilos;
    largoAlambre = largoAlambre.toFixed(2);
    alert("Se necesitan " + largoAlambre + " metros de alambre");
}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let bolsasDeCementoPorMetro;
    let bolsasDeCalPorMetro;
    let totalBolsasDeCemento;
    let totalBolsasDeCal;

    bolsasDeCementoPorMetro = 2
    bolsasDeCalPorMetro = 3

    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);

    area = largo * ancho;
    
    totalBolsasDeCemento = area * bolsasDeCementoPorMetro;
    totalBolsasDeCal = area * bolsasDeCalPorMetro;

    alert("Se necesitan " + totalBolsasDeCemento + " bolsas de cemento y " + totalBolsasDeCal + " bolsas de cal");
    
}