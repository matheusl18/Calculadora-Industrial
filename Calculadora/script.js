let btn = document.querySelector('#calcular');
let resultados = document.querySelector("#resultados");
let pesomil = document.querySelector("#pesomil");
let pesototal = document.querySelector("#pesototal");

btn.addEventListener('click', () => {
    var largura = document.getElementById("largura").value;
    var altura = document.getElementById("altura").value;
    var espessura = document.getElementById("espessura").value;
    var quantidade = 1000.0;
    var material = document.getElementById("material");
    var fator = 0.1;
    let modelo = document.getElementById("modelo").selectedIndex;
    var cores = document.getElementById("cores").value;

    var materialOption = material.options[material.selectedIndex].text;
    var materialSplit = materialOption.split("-");
    var materialValor = materialSplit[1];
    var pesoMil = largura*altura*espessura*fator*materialValor;
    var pesoTotal = pesoMil*quantidade;
    if (pesoTotal < 100 && modelo == 1 || pesoTotal < 100 && modelo == 0 && cores <= 4){
        alert("Peso total não atingiu o minimo de 100");
        resultados.value = 0;
        pesomil.value = 0;
        pesototal.value = 0;
    } else if(pesoTotal < 300 && modelo == 0 && cores <= 6){
        alert("Peso total não atingiu o minimo de 300");
        resultados.value = 0;
        pesomil.value = 0;
        pesototal.value = 0;
    } else{
        var qtdmin = pesoTotal/pesoMil;
        resultados.value = qtdmin;
        pesomil.value = pesoMil;
        pesototal.value = pesoTotal;
        /*alert(pesoMil);
        alert(pesoTotal);
        alert(qtdmin);*/
    };
});

function colors(){
    let modelo = document.getElementById("modelo").selectedIndex;
    let cores = document.getElementById("cores");
    if (modelo == 1){
        cores.readOnly = true;
        cores.style.pointerEvents = "none";
        cores.value = '1';
    }else{
        cores.readOnly = false;
        cores.style.pointerEvents = "fill";
    };
};
