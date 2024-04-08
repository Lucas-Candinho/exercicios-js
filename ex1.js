console.log("Digite os números que você quer somar:");
var sum = 0;
var number = 0;
var continuar = true;

while (continuar) {
    number = prompt("Digite um número:");
    sum = sum + parseInt(number);
    number = prompt("Você quer sair do programa? Digite 0 caso SIM, digite qualquer outro para NÃO: ");
    if (!parseInt(number)) {
        continuar = false;
    }
}

console.log("A soma dos números é:" + sum);