// 2) As organizações CSM resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual; 
// b. Salários até R$ 2800,00 (incluindo): aumento de 20%; 
// c. Salários entre R$ 2800,00 e R$7000,00: aumento de 15%; 
// d. Salários entre R$ 7000,00 e R$ 15000,00: aumento de 10%; 
// e. Salários de R$ 15000,00 em diante: aumento de 5% 
// Após o aumento ser realizado; informe na tela; 
// O salário antes do reajuste; 
// O percentual de aumento aplicado; 
// O valor do aumento; 
// O novo salário, após o aumento.

var salario = parseFloat(prompt("Digite o seu salário atual"));
var percentualAumento = calcularPercentualAumento(salario);
var valorAumento = AumentoEmReais(salario, percentualAumento);
var salarioReajustado = salarioNovo(salario, percentualAumento );


console.log("O salário antes do reajuste era de R$ " + salario.toFixed(2));
console.log("O reajuste foi de " + (percentualAumento * 100) + "%");
console.log("O valor do aumento foi de R$ " + valorAumento.toFixed(2));
console.log("O novo salário é de R$ " + salarioReajustado.toFixed(2));

function calcularPercentualAumento(salario) {
    if (salario <= 2800) {
        return 0.20
    } else if (salario > 2800 && salario <= 7000) {
        return 0.15   
    } else if (salario > 7000 && salario <= 15000) {
        return 0.10
    } else {
        return 0.05
    }
}

function aumento(salario, reajuste) {
    return salario * reajuste;    
}

function salarioNovo(salario, percentualAumento) {
    return salario + (salario * percentualAumento);
}

function AumentoEmReais(salario, percentualAumento) {
    return salario * percentualAumento 
}
