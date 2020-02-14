function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	var num;
	var maximo = 10;
	var minimo = 1


	var num = Math.floor(Math.random() * ((maximo+1)-minimo) + minimo);
	alert("El numero es "+num);

}//FIN DE LA FUNCIÓN