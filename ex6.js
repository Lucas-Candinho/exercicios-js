var vogais = ['a', 'e', 'i', 'o', 'u']
var letra = prompt("Digite uma letra: ");
var ehVogal = false;

for (let i = 0; i < vogais.length; i++) {
    if (letra.toLowerCase() === vogais[i]) {
        i = vogais.length + 1;
        console.log(ehVogal);
        ehVogal = true;
    }
}

if (ehVogal) {
    console.log("É vogal")
} else {
    console.log("É consoante")
}