// 7)	As organizações CSM resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.  
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual;
// •	b. Salários até R$ 2800,00 (incluindo): aumento de 20%;
// •	c. Salários entre R$ 2800,00 e R$7000,00: aumento de 15%;
// •	d. Salários entre R$ 7000,00 e R$ 15000,00: aumento de 10%;
// •	e. Salários de R$ 15000,00 em diante: aumento de 5%
// Após o aumento ser realizado; informe na tela;
// •	O salário antes do reajuste;
// •	O percentual de aumento aplicado;
// •	O valor do aumento;
// •	O novo salário, após o aumento. 


var salarioInicial = parseFloat(prompt("Qual foi o salário inicial?"));
var salarioFinal = 0;
var percentualAumento = 0;
var valorAumento = 0;

if (salarioInicial <= 2800) {
    percentualAumento = 0.20;
    valorAumento = salarioInicial * percentualAumento;
    salarioFinal = salarioInicial + valorAumento;
} else if (salarioInicial > 2800 && salarioInicial <= 7000) {
    percentualAumento = 0.15;
    valorAumento = salarioInicial * percentualAumento;
    salarioFinal = salarioInicial + valorAumento;
} else if (salarioInicial > 7000 && salarioInicial <= 15000) {
    percentualAumento = 0.10;
    valorAumento = salarioInicial * percentualAumento;
    salarioFinal = salarioInicial + valorAumento;
} else if (salarioInicial > 15000) {
    percentualAumento = 0.05;
    valorAumento = salarioInicial * percentualAumento;
    salarioFinal = salarioInicial + valorAumento;
}

alert("Sálario antes do reajuste R$" + salarioInicial + ",00");
alert("Percentual de aumento aplicado " + (percentualAumento * 100) + "%");
alert("O valor de aumento é de R$" + valorAumento + ",00");
alert("Sálario final é de R$" + salarioFinal + ",00");


------------------------------------------------
Algoritmo reescrito usando funções
------------------------------------------------
var salarioInicial = parseFloat(prompt("Qual foi o salário inicial?"));

var percentualAumento = obterPercentualAumento(salarioInicial);
var valorAumento = obterValorAumento(salarioInicial, percentualAumento);
var salarioFinal = obterSalarioFinal(salarioInicial, valorAumento);
imprimeResultados();

function obterPercentualAumento(salario){
    if (salario <= 2800) {
        return 0.20;
    } else if (salario > 2800 && salario <= 7000) {
        return 0.15;
    } else if (salario > 7000 && salario <= 15000) {
        return 0.10;
    } else if (salario > 15000) {
        return 0.05;
    }
}

function obterValorAumento(salario, percentualAumento){
    return salario * percentualAumento;
}

function obterSalarioFinal(salario, valorAumento){
    return salario + valorAumento;
}

function imprimeResultados(){
    alert("Sálario antes do reajuste R$" + salarioInicial + ",00");
    alert("Percentual de aumento aplicado " + (percentualAumento * 100) + "%");
    alert("O valor de aumento é de R$" + valorAumento + ",00");
    alert("Salario final é de R$" + salarioFinal + ",00");
}
