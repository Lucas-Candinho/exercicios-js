var meses = ["Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Septembro","Outubro","Novembro","Dezembro"];
var temp = 0;
var bruto = 0;
var gastos = 0;
var i = 0;

while (i < meses.length) {
    temp = prompt(`Digite o ganho bruto do mês de ${meses[i]}: `);
    bruto += parseInt(temp);
    temp = prompt(`Digite os gastos do mês de ${meses[i]}: `);
    gastos += parseInt(temp);
    i += 1;
}

console.log("O ganho bruto anual foi de " + bruto);
console.log("O gasto anual foi de " + gastos);

if (bruto - gastos > 0) {
    console.log("Houve lucro");
} else {
    console.log("Houve prejuízo");
}

console.log("O balanço foi de: " + (bruto - gastos));
