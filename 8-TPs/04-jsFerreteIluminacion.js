/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidadIngresada;
    let precioPorLampara;
    let valorDescuentoAplicado;
    let descuentoAplicado;
    let marcaSeleccionada;
    let precioTotalLamparas;

    precioPorLampara = 35;
    valorDescuentoAplicado = 0;
    impuestoAplicado = 0;

    cantidadIngresada = document.getElementById("txtIdCantidad").value;
    cantidadIngresada = parseInt(cantidadIngresada);
    marcaSeleccionada = document.getElementById("Marca").value;

    if (cantidadIngresada > 5) {
        valorDescuentoAplicado = 50/100;                         // Guardamos el 50% de descuento para 6 lamparas o más
    } else if (cantidadIngresada == 5){
        valorDescuentoAplicado = 30/100;                         // Guardamos el 30% de descuento para 5 lamparas
        if(marcaSeleccionada == "ArgentinaLuz") {
            valorDescuentoAplicado = 40/100;                     // Guardamos el 40% de descuento para ArgentinaLuz y 5 lamparas
        }
    } else if (cantidadIngresada == 4){
        valorDescuentoAplicado = 20/100;                         // Guardamos el 20% de descuento para 4 lamparas
        if(marcaSeleccionada == "ArgentinaLuz" || marcaSeleccionada == "FelipeLamparas") {
            valorDescuentoAplicado = 25/100;                     // Guardamos el 25% de descuento para ArgentinaLuz o FelipreLamparas;
        }
    } else if(cantidadIngresada == 3) {
        valorDescuentoAplicado = 5/100;                          // Guardamos el 5% de descuento para 3 lamparas
        if (marcaSeleccionada == "ArgentinaLuz") {
            valorDescuentoAplicado = 15/100;                     // Guardamos el 15% de descuento para ArgentinaLuz y 3 lamparas
        } else if (marcaSeleccionada == "FelipeLamparas") {
            valorDescuentoAplicado = 10/100;                     // Guardamos el 10% de descuento para FelipeLamparas y 3 lamparas
        }
    }

    precioTotalLamparas = cantidadIngresada * precioPorLampara;
    descuentoAplicado = precioTotalLamparas * valorDescuentoAplicado;
    precioTotalLamparas = precioTotalLamparas - descuentoAplicado;

    // IIBB
    if (precioTotalLamparas > 120) {
        impuestoAplicado = precioTotalLamparas * 10 / 100;
        document.getElementById("txtIdprecioDescuento").value = precioTotalLamparas + impuestoAplicado;
        alert("Usted pagó " + impuestoAplicado + " de IIBB.");
    } else {
        document.getElementById("txtIdprecioDescuento").value = precioTotalLamparas;        
    }

}
