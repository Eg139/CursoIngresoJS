function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	var num;
	var maximo = 10;
	var minimo = 1; 
	num = Math.floor(Math.random()*((maximo+1)-minimo)+minimo);
	if (num >= 9) {
		alert("Excelente " + num);
	} else if (num >=4) {
		alert("Aprobo "+ num);
	}else {
		alert("Vamos, la proxima se puede "+ num);
	}

}//FIN DE LA FUNCIÓN