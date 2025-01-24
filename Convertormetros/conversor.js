function metrosparacentimetro(metros){
	let resultado = metros * 100
	return resultado
}

document.getElementById("btnConverter").addEventListener("click", function() 
{
	let metros = document.getElementById("metros").value
	document.getElementById("centimetros").value = metrosparacentimetro(metros)
})

