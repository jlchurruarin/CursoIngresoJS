function mostrar()
{
    let precioIngresado;
    let porcentajeDescuentoIngresado;
    let precioFinal;
    let valorDescontado;

    precioIngresado = prompt("Ingrese el precio:");
    precioIngresado = parseFloat(precioIngresado);

    porcentajeDescuentoIngresado = prompt("Ingrese el porcentaje de descuento:");
    porcentajeDescuentoIngresado = parseFloat(porcentajeDescuentoIngresado);

    valorDescontado = porcentajeDescuentoIngresado * precioIngresado / 100;
    precioFinal = precioIngresado - valorDescontado;

    document.getElementById("elPrecioFinal").value = precioFinal;

}
