import Produtos from './data.js';
console.log(Produtos);

const produtos = Produtos;

const campoBusca = document.getElementById("campoBusca")
const ordenacao = document.getElementById("ordenacao")
const listaProdutos = document.getElementById("listaProdutos")

mostrarProdutos()

function mostrarProdutos() {

    // filtro de busca
    let txtBusca = campoBusca.value.toLowerCase()
    let produtosFiltrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(txtBusca) // includes verifica se existe o texto buscado dentro da lista
    )

    // filtro de ordenação
    if (ordenacao.value === "nomeAz") {
        produtosFiltrados.sort((a, b) => { // precisa de parametros por ser um array de obj
            return a.nome.localeCompare(b.nome) // localeCompare faz uma comparação linguistica mais correta
        })
    }
    if (ordenacao.value === "nomeZa") {
        produtosFiltrados.sort((a, b) => {
            return b.nome.localeCompare(a.nome)
        })
    }
    if (ordenacao.value === "precoMenor") {
        produtosFiltrados.sort((a, b) => {
            return a.preco - b.preco
        })
    }
    if (ordenacao.value === "precoMaior") {
        produtosFiltrados.sort((a, b) => {
            return b.preco - a.preco
        })
    }

    listaProdutos.innerHTML = "";

    if (produtosFiltrados.length === 0) {
        listaProdutos.innerHTML = "<p class = 'mensagem'> Nenhum produto encontrado.</p>"
        return;
    }

    for (let i = 0; i < produtosFiltrados.length; i++) {
        let produto = produtosFiltrados[i];

        listaProdutos.innerHTML += `
            <div class = card>
                <h2>${produto.nome}</h2>
                <p>Categoria: ${produto.categoria}</p>
                <p class = 'preco'>R$: ${produto.preco.toFixed(2).replace(".", ",")}</p>
            </div>
        `
    }
}

// Eventos

campoBusca.addEventListener("input", () => {
    mostrarProdutos()
})

ordenacao.addEventListener("change", () => {
    mostrarProdutos()
})