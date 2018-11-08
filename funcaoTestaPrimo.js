
function calcularPrimo(){
	var n = document.getElementById("numero").value
	var primo= "Este número é primo"


	n=parseInt(n)	
	console.log(n)
	for(let i=2; i<n ; i++){
		if(n % i==0){
			primo= "Este número não é primo"
			break;
		}
	}
	document.getElementById("resultado").innerHTML = primo
}