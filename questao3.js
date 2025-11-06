const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getDiasNoMes(mes, ano) {
    if (mes === 2) {
        // Fevereiro
        if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
            return 29; // Ano bissexto
        } else {
            return 28;
        }
    } else if ([1, 3, 5, 7, 8, 10, 12].includes(mes)) {
        // Meses com 31 dias
        return 31;
    } else if ([4, 6, 9, 11].includes(mes)) {
        // Meses com 30 dias
        return 30;
    } else {
        return null;
    }
}

function main() {
    rl.question('Digite o número do mês (1 a 12): ', (mes) => {
        mes = parseInt(mes);
        if (isNaN(mes) || mes < 1 || mes > 12) {
            console.log('Mês inválido');
            rl.close();
            return;
        }

        rl.question('Digite o ano: ', (ano) => {
            ano = parseInt(ano);
            if (isNaN(ano)) {
                console.log('Ano inválido');
                rl.close();
                return;
            }

            const diasNoMes = getDiasNoMes(mes, ano);
            if (diasNoMes === null) {
                console.log('Mês inválido');
            } else {
                console.log(`Mês ${mes} de ${ano} tem ${diasNoMes} dias.`);
            }

            rl.close();
        });
    });
}

main();