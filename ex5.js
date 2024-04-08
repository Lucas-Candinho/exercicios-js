int1 = parseInt(prompt("Digite um número inteiro: "));

function ehPar(n) {
    return n % 2 == 0;
}

if (ehPar(int1)) {
    console.log("O número " + int1 + " é par");
    console.log("Virou impar: " + (int1 + 1));
} else {
    console.log("O número " + int1 + " é impar");
    console.log("Virou par: " + (int1 + 1));
}