/**
 * José Luis Churruarin
 * Bienvenidos.
 * Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.
 */
function mostrar()
{
    let tamañoBase;
    let tamañoLadoUno;
    let tamañoLadoDos;
    let perimetroTriangulo;

    tamañoBase = prompt("Ingrese el tamaño de la base del triangulo:");
    tamañoBase = parseInt(tamañoBase);
    tamañoLadoUno = prompt("Ingrese el tamaño de uno de los lados del triangulo:");
    tamañoLadoUno = parseInt(tamañoLadoUno);
    tamañoLadoDos = prompt("Ingrese el tamaño de uno de los lados del triangulo:");
    tamañoLadoDos = parseInt(tamañoLadoDos);

    if (tamañoBase == tamañoLadoUno && tamañoLadoUno == tamañoLadoDos && tamañoBase > 0) {
        perimetroTriangulo = tamañoBase * 3;
        alert("El perimetro del triangulo es: " + perimetroTriangulo );
    } else {
        alert("El triangulo no es rectangulo o su tamaño no es valido");
    }

}
dark