/**
 * José Luis Churruarin
 * Pedir dos números y mostrar el resultado:
 * Si son iguales los muestro concatenados.
 * Si el primero es mayor, los resto,
 * de lo contrario los sumo.
 * Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
 * "la resta es xxx y superó el 10". 
 * */

function mostrar()
{

    let numeroUnoIngresado;
    let numeroDosIngresado;
    let resultadoFinal;

    numeroUnoIngresado = prompt("Ingrese el primer numero");
    numeroDosIngresado = prompt("Ingrese el segundo numero");

    if(numeroUnoIngresado == numeroDosIngresado) 
    {
        resultadoFinal = numeroUnoIngresado + numeroDosIngresado;
    } 
    else 
    {
        numeroUnoIngresado = parseInt(numeroUnoIngresado);
        numeroDosIngresado = parseInt(numeroDosIngresado);
        if (numeroUnoIngresado > numeroDosIngresado) 
        {
            resultadoFinal =  numeroUnoIngresado - numeroDosIngresado;
            if (resultadoFinal > 10) {
                alert("La resta es " + resultadoFinal + " y supero el 10");
            }

        } 
        else 
        {
            resultadoFinal = numeroUnoIngresado + numeroDosIngresado;
        }

    }
    
    alert("Resultado final: " + resultadoFinal);

}
