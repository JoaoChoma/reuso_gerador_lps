function getJson(){
	nome_produto = localStorage.getItem('nome_produto');
	id1 = localStorage.getItem('id1');
	id2 = localStorage.getItem('id2');
	id3 = localStorage.getItem('id3');
	id4 = localStorage.getItem('id4');
	id5 = localStorage.getItem('id5');
	id6 = localStorage.getItem('id6');
	id7 = localStorage.getItem('id7');
	
	document.getElementById("txtCodigo").value = "";
	document.getElementById("txtCodigo").value += "ProductName: " + nome_produto + ";	";
	document.getElementById("txtCodigo").value += "F1: " + id1 + ";	";
	document.getElementById("txtCodigo").value += "F2: " +  id2 + ";	";
	document.getElementById("txtCodigo").value += "F3: " +  id3 + ";	";
	document.getElementById("txtCodigo").value += "F4: " +  id4 + ";	";
	document.getElementById("txtCodigo").value += "F5: " +  id5 + ";	";
	document.getElementById("txtCodigo").value += "F6: " +  id6 + ";	";
	document.getElementById("txtCodigo").value += "F7: " +  id7 + ";	";
	
}

btnGerarCodigo.onclick = function(){
	modelo = document.getElementById("txtCodigo").value;

	localStorage.removeItem("modelo");
	localStorage.setItem("modelo", modelo);
	
	window.open('gerar_codigo.html', '_self');

	return false

}