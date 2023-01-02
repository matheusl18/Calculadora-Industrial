let btn = document.getElementById("calcular");

btn.addEventListener('click', () => {
    var largura = document.getElementById("largura").value;
    var altura = document.getElementById("altura").value;
    var espessura = document.getElementById("espessura").value;
    var quantidade = document.getElementById("quantidade").value;
    var fator = 0.1;

    var pesoMil = largura*altura*espessura*fator;
    var pesoTotal = pesoMil*quantidade;
    var qtdmin = pesoTotal/pesoMil;
    alert(pesoMil);
    alert(pesoTotal);
    alert(qtdmin);

})