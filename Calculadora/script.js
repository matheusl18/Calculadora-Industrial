let btn = document.querySelector('#calcular');
let resultados = document.querySelector("#resultados");
let pesomil = document.querySelector("#pesomil");
let pesototal = document.querySelector("#pesototal");


const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    if(input.id == "espessura"){
        input.addEventListener('change', function(){
            this.value = parseFloat(this.value).toFixed(3);
        });
    } else{
        input.addEventListener('change', function(){
            if (this.value < 4){
                alert(`O valor minimo da ${input.id} é 4`)
                this.value = 4;
            }
            this.value = parseFloat(this.value).toFixed(1);
        });
    };
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
    switch (materialOption){
        case "PEBD":
            materialValor = 0.92;
            break;
        case "PEAD":
            materialValor = 0.95;
            break;
        case "PP":
            materialValor = 0.90;
            break;
        case "BOPP TRANSP":
            materialValor = 0.91;
            break;
        case "BOPP PEROLA":
            materialValor = 0.70;
            break;
        case "NYLON":
            materialValor = 1.0;
            break;
    }
    var pesoMil = largura*altura*espessura*fator*materialValor;
    var pesoTotal = pesoMil*quantidade;
    if (pesoTotal < 100 && modelo == 1 || pesoTotal < 100 && modelo == 0 && cores <= 4 && materialOption != "NYLON"){
        alert("Peso total não atingiu o minimo de 100 kg");
        resultados.value = 0;
    } else if(pesoTotal > 100 && modelo == 1 || pesoTotal > 100 && modelo == 0 && cores <= 4 && materialOption != "NYLON"){
        var qtdmin = 100/pesoMil;
        resultados.value = parseFloat(qtdmin).toFixed(3);
    } else if(pesoTotal < 300 && modelo == 0 && cores <= 6){
        alert("Peso total não atingiu o minimo de 300 kg");
        resultados.value = 0;
    } else if(pesoTotal > 300 && modelo == 0 && cores <= 6){
        var qtdmin = 300/pesoMil;
        resultados.value = parseFloat(qtdmin).toFixed(3);
    };
});

function colors(){
    let modelo = document.getElementById("modelo").selectedIndex;
    let cores = document.getElementById("cores");
    if (modelo == 1){
        cores.readOnly = true;
        cores.style.pointerEvents = "none";
        cores.innerHTML += `<option>N/A</option>`
        cores.value = 'N/A';
    }else{
        cores.readOnly = false;
        cores.style.pointerEvents = "fill";
        cores.removeChild(cores.lastElementChild);
    };
};
