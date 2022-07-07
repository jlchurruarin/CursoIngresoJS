function mostrar()
{
    let nombrePersonaUno;
    let nombrePersonaDos;
    let pesoPersonaUno;
    let pesoPersonaDos;
    let pesoSumando;
    let pesoPromedio;
    let textoFinal;

    nombrePersonaUno = prompt("Ingrese el nombre de la primer persona:");
    pesoPersonaUno = prompt("Ingrese el peso de " + nombrePersonaUno + ":");
    pesoPersonaUno = parseFloat(pesoPersonaUno);

    nombrePersonaDos = prompt("Ingrese el nombre de la segunda persona:");
    pesoPersonaDos = prompt("Ingrese el peso de " + nombrePersonaDos + ":");
    pesoPersonaDos = parseFloat(pesoPersonaDos);

    pesoSumando = pesoPersonaUno + pesoPersonaDos;
    pesoPromedio = pesoSumando / 2;

    //" " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ""
    textoFinal = "ustedes se llaman " + nombrePersonaUno + " y " + nombrePersonaDos;
    textoFinal = textoFinal + " pesan " + pesoPersonaUno + " y " + pesoPersonaDos + " kilos,";
    textoFinal = textoFinal + " que sumados son " + pesoSumando + " kilos y el promedio de peso es " + pesoPromedio + " kilos";
    alert(textoFinal);
    
}
