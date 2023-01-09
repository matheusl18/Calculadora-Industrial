let btn = document.querySelector('#calcular');
let resultados = document.querySelector("#resultados");
let pesomil = document.querySelector("#pesomil");
let pesototal = document.querySelector("#pesototal");

const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener('change', function(){
        this.value = parseFloat(this.value).toFixed(2);
    });
});


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
    if (materialOption == "PEBD"){
        materialValor = 0.92
    } else if (materialOption == "PEAD"){
        materialValor = 0.95
    } else if (materialOption == "PP"){
        materialValor = 0.90
    } else if (materialOption == "BOPP TRANSP"){
        materialValor = 0.91
    } else if (materialOption == "BOPP PEROLA"){
        materialValor = 0.70
    } else if (materialOption == "NYLON"){
        materialValor = 1.0
    }
    var pesoMil = largura*altura*espessura*fator*materialValor;
    var pesoTotal = pesoMil*quantidade;
    if (pesoTotal < 100 && modelo == 1 || pesoTotal < 100 && modelo == 0 && cores <= 4){
        alert("Peso total não atingiu o minimo de 100");
        resultados.value = 0;
        /*pesomil.value = 0;
        pesototal.value = 0;*/
    } else if(pesoTotal > 100 && modelo == 1 || pesoTotal > 100 && modelo == 0 && cores <= 4){
        var qtdmin = 100/pesoMil;
        resultados.value = qtdmin;
       /* pesomil.value = pesoMil;
        pesototal.value = pesoTotal;*/
    } else if(pesoTotal < 300 && modelo == 0 && cores <= 6){
        alert("Peso total não atingiu o minimo de 300");
        resultados.value = 0;
        /*pesomil.value = 0;
        pesototal.value = 0;*/
    } else if(pesoTotal > 300 && modelo == 0 && cores <= 6){
        var qtdmin = 300/pesoMil;
        resultados.value = qtdmin;
        /*pesomil.value = pesoMil;
        pesototal.value = pesoTotal;*/
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
        cores.value = '0';
    }else{
        cores.readOnly = false;
        cores.style.pointerEvents = "fill";
    };
};
