import entradaDados from 'readline-sync';

console.log("Aplicação de Juros:\n");

let taxaJuros; //Valor atribuído futuramente
let valorDivida = entradaDados.question("Informe o valor devido: R$ ");
if (valorDivida <= 0) {
    console.log("O valor da dívida deve ser maior que zero!");
} else {
    
    let diasAtrasados = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
    
    if (diasAtrasados <= 0) {
        console.log("Você está em dia!")
    } else {
        if (diasAtrasados > 15) {
            taxaJuros = 10;
        } else {
            taxaJuros = 5;
        };
        
        let valorTotalJuros = (valorDivida / 100) * taxaJuros;
        let totalDivida = Number(valorDivida) + Number(valorTotalJuros); 
        
        //Saída de dados
        console.log("\nValor original da dívida: R$ "+valorDivida);
        console.log("Dias atrasados: "+diasAtrasados);
        console.log("Taxa de Juros: "+taxaJuros+"%");
        console.log("Valor total com juros: R$ "+totalDivida);      
    };
};       
