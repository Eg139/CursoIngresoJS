/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1;
    var numero2;
    var resultado;
    numero1 = parseInt(document.getElementById("numeroUno").value);
    numero2 = parseInt(document.getElementById("numeroDos").value);
    resultado = parseInt(numero1) + parseInt(numero2);
    alert("La suma es "+ resultado);
    /* var numero1;
    var numero2;
    numero1 = Number(document.getElementById("numeroUno").value);
    numero2 = Number(document.getElementById("numeroDos").value);

    //con el comando NUmber se declara como numero los datos que ingresan//


    alert("La suma es "+ numero1 + numero2);
    
    
    //en este metodo no es necesario parceInt//
    */
}

