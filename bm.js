(function(){
	var tab = document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];
	var linhas = tab.getElementsByTagName("tr");
	var colunas = [];
	var tmp = [];
	var dados = [];
	for (var i = 0; i < linhas.length; i++){
		colunas[i] = linhas[i].getElementsByTagName("td");
	}
	var cont = 0;
	for (var i = 2; i < colunas.length - 2; i++){
		tmp = [];
		for (var j = 0; j < colunas[i].length; j++){
			tmp[j] = colunas[i][j].textContent;
		}
		dados[cont] = tmp;
		cont++;
	}
	for (c of dados){
		console.log(c);
	}
})();
