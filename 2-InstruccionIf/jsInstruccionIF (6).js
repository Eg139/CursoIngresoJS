function mostrar()
{
//tomo la edad  
var edad = parseInt(document.getElementById("edad").value);
if(edad >=18){
    alert("Es mayor de edad");
}else if(edad <= 17 && edad >=13){
    alert("Es un adolescente");
} else{
    alert("Es un niño");
}



}//FIN DE LA FUNCIÓN