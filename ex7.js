var sabores = ['chocolate', 'morango', 'creme', 'manga', 'melancia', 'vanilla', 'céu azul', 'brownie', 'hawaiano'];
var valores = [1.50, 2.50, 2.5, 3.20, 3.40, 3.00, 3.60, 4.00, 5.00];
var escolha = "";

for (let i = 0; i < sabores.length; i++) {
    console.log(`${sabores[i]}`);
}
escolha = prompt("Digite o sabor que você quer: ")
for (let i = 0; i < sabores.length; i++) {
    if (escolha.toLowerCase() == sabores[i]) {
        console.log(`${sabores[i]}` + " | Valor: " + valores[i]) ;
    }
}
