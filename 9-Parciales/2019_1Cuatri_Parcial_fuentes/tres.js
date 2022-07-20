/**
 * José Luis Churruarin
 * Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
 */

function mostrar()
{
    let precioIngresado;
    let porcentajeDescuentoIngresado;
    let precioFinal;
    let valorDescontado;

    precioIngresado = prompt("Ingrese el precio:");
    precioIngresado = parseFloat(precioIngresado);
    if(precioIngresado > 0) {
        porcentajeDescuentoIngresado = prompt("Ingrese el porcentaje de descuento:");
        porcentajeDescuentoIngresado = parseFloat(porcentajeDescuentoIngresado);

        if (porcentajeDescuentoIngresado >= 0) {
            valorDescontado = porcentajeDescuentoIngresado * precioIngresado / 100;
            precioFinal = precioIngresado - valorDescontado;

            document.getElementById("elPrecioFinal").value = precioFinal;
        } else {
            alert("El procentaje de descuento debe ser mayor o igual a 0");
        }
        
    } else {
        alert("el precio ingresado debe ser mayor a 0");
    }
    

}
