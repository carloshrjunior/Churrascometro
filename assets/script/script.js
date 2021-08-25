// Carne: 400g por pessoa (6 horas ou mais: 650g)
// Cerveja: 1200ml por pessoa (6 horas ou mais: 2000ml)
// Refrigerante/água: 1000ml por pessoa (6 horas ou mais: 1500ml)

// Criança valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function mostrarResultado() {
    let div = document.getElementById("resultado-div");
    div.style.display = "block";
}

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
    let qtdCerveja = cervejaPP(duracao) * adultos;
    let qtdBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

    resultado.innerHTML = "<h4>Serão necessárias as seguintes quantidades para o seu churrasco:</h4>";
    resultado.innerHTML += `<p>${qtdCarne / 1000}kg de carne</p>`
    resultado.innerHTML += `<p>${qtdCerveja / 1000} litros de cerveja</p>`
    resultado.innerHTML += `<p>${qtdBebidas / 1000} litros de refrigerante/água</p>`
}

function carnePP(duracao) {
    if (duracao > 5) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao > 5) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao > 5) {
        return 1500;
    } else {
        return 1000;
    }
}