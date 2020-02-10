/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var num1 = document.getElementById("numeroDividendo").value;
    var num2 = document.getElementById("numeroDivisor").value;
    var sresto = parseInt(num1) % parseInt(num2);
    alert("El resto es "+ sresto);
    
}
