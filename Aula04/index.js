const nomeL = "Lanchonete do davizin"
let nomeC = prompt("Digite o nome do cliente")
let nomeP = prompt("Digite o nome do lanche")
let precoP = Number(prompt("Digite o preço do lanche"))
let qtP = Number(prompt("Digite a quantidade de "+nomeP))

const vt = precoP * qtP

console.log(` === ${nomeL} ===\n\n
    Cliente: ${nomeC}\n
    Produto: ${nomeP}\n
    Preço unitário: ${precoP}\n
    Quantidade: ${qtP}\n
    Total da compra: ${vt}\n
    Pedido realizado com sucesso!
    Obrigado pela preferência.`);
