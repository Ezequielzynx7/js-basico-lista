const prompt = require('prompt-sync')()

console.log("        TABUADA       ")
let numero = Number(prompt("Informe O Número: "))
if(numero == 0){
  console.log("Numero Invalido")
}else{
    for (let i = 1; i <= 10; i++) {
  let numer1 = numero * i
  console.log(numero, "*", i, "=", numer1)
}

}

