function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num = Math.floor(Math.random()*10)+1;
	if (num <= 10 && num>=9) {
		alert("Excelente");
	} else if (num >=4) {
		alert("Aprobo");
	}else {
		alert("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN