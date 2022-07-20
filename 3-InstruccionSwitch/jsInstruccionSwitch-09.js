/**
 * José Luis Churruarin
 * Enunciado:
 * una agencia de viajes debe sacar las tarifas de los viajes , 
 * se cobra $15.000 por cada estadia como base, 
 * se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
 * 
 * en Invierno: 			+bariloche tiene un aumento del 20% 
 * 							-cataratas y Cordoba tiene un descuento del 10% 
 * 							-Mar del plata tiene un descuento del 20%
 * 
 * en Verano: 				-bariloche tiene un descuento del 20% 
 * 							+cataratas y Cordoba tiene un aumento del 10% 
 * 							+Mar del plata tiene un aumento del 20%
 * 
 * en Otoño y Primavera: 	+bariloche tiene un aumento del 10% 
 * 							+cataratas tiene un aumento del 10% 
 * 							+Mar del plata tiene un aumento del 10% y 
 * 							Cordoba tiene el precio sin descuento
 */


function mostrar()
{

	let estacionSeleccionada =txtIdEstacion.value;
	let destinoSeleccionado =txtIdDestino.value;
	let porcentajeVariacionDePrecio;
	let valorVariacionDePrecio;
	let valorEstadia;
	let precioFinal;

	valorEstadia = 15000;
	porcentajeVariacionDePrecio = 0;

	switch(estacionSeleccionada) 
	{
		case "Invierno":
			switch(destinoSeleccionado)
			{
				case "Bariloche":
					porcentajeVariacionDePrecio = 20/100;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentajeVariacionDePrecio = -10/100;
					break;
				case "Mar del plata":
					porcentajeVariacionDePrecio = -20/100;
					break;
			}
			break;
		case "Verano":
			switch(destinoSeleccionado)
			{
				case "Bariloche":
					porcentajeVariacionDePrecio = -20/100;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentajeVariacionDePrecio = 10/100;
					break;
				case "Mar del plata":
					porcentajeVariacionDePrecio = 20/100;
					break;
			}		
			break;
		case "Otoño":
		case "Primavera":
			switch(destinoSeleccionado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentajeVariacionDePrecio = 10/100;
					break;
			}
			break;
	}
	
	valorVariacionDePrecio = valorEstadia * porcentajeVariacionDePrecio;
	precioFinal = valorEstadia + valorVariacionDePrecio;

	alert("El precio final es: $" + precioFinal);

}//FIN DE LA FUNCIÓN