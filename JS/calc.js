var op   = "";
var op2  = false;
var calc = true;
var n1   = 0;
var n2   = 0;

function cl() {
	document.getElementById("display").value = "0";
	// document.getElementById("historico").innerq	n1 = 0;
	n1 = 0;
	n2 = 0;
	op = "";
	op2 = false;
	calc = true;
}

function tecla(id) {
	var tValor = document.getElementById("display");
	var length = tValor.value.length;
	var maxlength = 8;

	if (length < maxlength) {
		//alert(tValor.value + "\n" + id + "\n" + calc + "\n");
		if (id == ".") {
			if (tValor.value.indexOf(id) < 0) {
				if(calc == true || op2 == true){
					tValor.value =  "0" + id;
					calc = false;
					op2 = false;
				}else tValor.value = tValor.value + id;
			}
		}else{
			if (tValor.value == "0") {
				tValor.value = id;
				calc = false;
			} else {
				if(calc == true || op2 ==true){
					tValor.value = id;
					calc = false;
					op2 = false;
				}else tValor.value = tValor.value + id;
			}
		}
	}
}

function invert(){
	var tValor = document.getElementById("display");
	if(tValor.value != "0"){
		if(tValor.value.indexOf("-") < 0){
			tValor.value = "-" + tValor.value;
		}else{
			tValor.value = tValor.value.substring(1);
		}
	}
}

function parcial(id){
	if(calc == false){
		calcular();
	}
	
	var tValor = document.getElementById("display");
	op = id;
	n1 = parseFloat(tValor.value);
	
	op2 = true;
}

function calcular(){
	var tValor = document.getElementById("display");
	n2 = parseFloat(tValor.value);
	if(op == "+"){
		document.getElementById("display").value = (n1 + n2);
	}
	if(op == "-"){
		document.getElementById("display").value = (n1 - n2);
	}
	if(op == "*"){
		document.getElementById("display").value = (n1 * n2);
	}
	if(op == "/"){
		if(n2 != 0){
			document.getElementById("display").value = (n1 / n2);
		}else{
			alert("ERRO!\nDivisor não pode ser ZERO!");
		}
	}
	
	op2 =false;
	
	calc = true;
}

function square(){
	if(calc == false){
		calcular();
	}
	
	var tValor = document.getElementById("display");
	n1 = parseFloat(tValor.value);
	if(n1 >=0){
		n1 = Math.sqrt(n1);
		document.getElementById("display").value = n1;
	}else{
		alert("ERRO!\nNúmero negativo não possui raiz quadrada!");
	}
		
	calc = true;
}

function percent(){
	var tValor = document.getElementById("display");
	n2 = parseFloat(tValor.value);
	
	if(op == "+"){
		document.getElementById("display").value = n1 + (n1 * n2 / 100);
	}
	if(op == "-"){
		document.getElementById("display").value = n1 - (n1 * n2 / 100);
	}
	if(op == "*"){
		document.getElementById("display").value = n1 * n2 / 100;
	}
	
	calc = true;
	op = "";
	op2 = false;
}

