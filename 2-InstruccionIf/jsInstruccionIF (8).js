function mostrar()
{
//tomo la edad  
var edad = document.getElementById("edad").value;
var estadoCivil = document.getElementById("estadoCivil").value;
if (edad < 18 && estadoCivil !="Soltero") {
    alert("probando codigo");
}
else if
(edad >= 18 && estadoCivil == "Soltero"){
    alert("Es mayor y es soltero");
}	


}//FIN DE LA FUNCIÓN