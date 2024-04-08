var int1 = 0;
var int2 = 0;
var int3 = 0;
var int4 = 0;
var intArray = [int1, int2, int3, int4];

for (let i = 0; i < intArray.length; i++) {
    intArray[i] = parseInt(prompt("Digite um número inteiro: "));
}

intArray.sort(function(a, b){return b - a});
console.log(intArray);
