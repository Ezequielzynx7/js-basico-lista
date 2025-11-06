const prompt = require('prompt-sync')()
let mut1, mut2, mut3
let preco = Number(prompt("Valor Do Produto: "))
console.log(" Escolha as Opçois Abaixo\n 1 = 0%\n 2 = 5%\n 3 = 10%\n 4 = 15% ")
let de = Number(prompt(": "))

 mut1 = preco * 1.05
 mut2 = preco * 1.10
mut3 = preco * 1.15

switch (de){
    case 1:
        console.log(": ",de)
        break
        case 2:
           
            console.log(": ",mut1)
        break    
        case 3:
            
            console.log(": ",mut2) 
        break     
        case 4:
           
            console.log(": ",mut3) 
        break
                


}

