let a = 10;
let b = 2;
let op = 3; // Opção escolhida

console.log("Menu de Opções:");
console.log("1 - Somar");
console.log("2 - Subtrair");
console.log("3 - Multiplicar");
console.log("4 - Dividir");

switch (op) {
    case 1:
        console.log(`Resultado da soma: ${a + b}`);
        break;
    case 2:
        console.log(`Resultado da subtração: ${a - b}`);
        break;
    case 3:
        console.log(`Resultado da multiplicação: ${a * b}`);
        break;
    case 4:
        if (b === 0) {
            console.log("Erro: Divisão por zero!");
        } else {
            console.log(`Resultado da divisão: ${a / b}`);
        }
        break;
    default:
        console.log("Opção inválida");
}