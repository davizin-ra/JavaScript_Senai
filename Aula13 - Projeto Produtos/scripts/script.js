const produtosMock = {
    "1234": { nome: "Webcam HD", categoria: "Acessórios", preco: 199.90 },
    "4212": { nome: "Mousepad RGB", categoria: "Periféricos", preco: 59.90 },
    "5321": { nome: "Caixa de Som Bluetooth", categoria: "Áudio", preco: 229.90 },
}

const input = document.getElementById("code");
const btnBuscar = document.getElementById("botaoBuscar");
const divItem = document.getElementById("divItem");

function criarProduto(produto) {
    divItem.innerHTML =
    `
        <div class = card>
            <h2>${produto.nome}</h2>
            <p>Categoria: ${produto.categoria}</p>
            <p class = 'preco'>R$: ${produto.preco.toFixed(2).replace(".", ",")}</p>
        </div>
    `
}

function limparProduto() {
    divItem.innerHTML = ""
    input.value = "";
}

function buscarCode() {
    const code = input.value.replace(/\D/g, "").trim();
    if (code.length !== 4) {
        alert("Código inválido");
        limparProduto();
        return;
    }

    const produto = produtosMock[input.value]

    if (!produto) {
        alert("Produto não encontrado")
        limparProduto();
        return;
    }

    criarProduto(produto)
}

btnBuscar.addEventListener("click", buscarCode)