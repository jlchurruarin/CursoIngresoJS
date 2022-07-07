
function mostrar()
{
    let tamañoBase;
    let perimetroTriangulo;

    tamañoBase = prompt("Ingrese el tamaño de la base del triangulo:");
    tamañoBase = parseInt(tamañoBase);

    perimetroTriangulo = tamañoBase * 3;

    alert("El perimetro del triangulo es: " + perimetroTriangulo );

}
