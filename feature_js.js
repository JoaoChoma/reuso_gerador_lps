id1.onchange = function() {
     // do something when checked
     document.getElementById("id2").checked = this.checked;
     document.getElementById("id3").checked = this.checked;
     document.getElementById("id4").checked = this.checked;
}

id2.onchange = function() {
     document.getElementById("id1").checked = this.checked;
     document.getElementById("id3").checked = this.checked;
     document.getElementById("id4").checked = this.checked;
}

id3.onchange = function() {
    document.getElementById("id1").checked = this.checked;
     document.getElementById("id2").checked = this.checked;
     document.getElementById("id4").checked = this.checked;
}

id4.onchange = function() {
    document.getElementById("id1").checked = this.checked;
     document.getElementById("id2").checked = this.checked;
     document.getElementById("id3").checked = this.checked;
}

botao.onclick = function(){
	nome_produto = document.getElementById("nome_produto").value;
	id1 = document.getElementById("id1").checked;
	id2 = document.getElementById("id2").checked;
	id3 = document.getElementById("id3").checked;
	id4 = document.getElementById("id4").checked;
	id5 = document.getElementById("id5").checked;
	id6 = document.getElementById("id6").checked;
	id7 = document.getElementById("id7").checked;

	localStorage.removeItem("nome_produto");
	localStorage.removeItem("id1");
	localStorage.removeItem("id2");
	localStorage.removeItem("id3");
	localStorage.removeItem("id4");
	localStorage.removeItem("id5");
	localStorage.removeItem("id6");
	localStorage.removeItem("id7");


	localStorage.setItem("nome_produto", nome_produto);
	localStorage.setItem("id1", id1);
	localStorage.setItem("id2", id2);
	localStorage.setItem("id3", id3);
	localStorage.setItem("id4", id4);
	localStorage.setItem("id5", id5);
	localStorage.setItem("id6", id6);
	localStorage.setItem("id7", id7);

	window.open('gerar_modelo.html', '_self');

	return false

}