const input = document.getElementById("input")
const btnAdd = document.getElementById("btnAdd")
const lista = document.getElementById("lista")
const btnAtender = document.getElementById("btnAtender")
const pedidoAtual = document.getElementById("pedidoAtual")

let pedidos = ["teste", "teste2"]
atualizar()

function armazenar() {
    localStorage.setItem("pedidos", JSON.stringify(pedidos))
}

function localPedidos() {
    let lPedidos = localStorage.getItem("pedidos")
    if (lPedidos) {
        pedidos = JSON.parse(lPedidos)
    }
}

btnAdd.addEventListener("click", () => {
    pedidos.unshift(input.value)
    atualizar()
    armazenar()
})

console.log(pedidos);


function atualizar() {
    localPedidos()
    lista.innerHTML = ""
    pedidos.forEach(pedido => {
        let li = document.createElement("li")
        li.innerText = pedido
        lista.appendChild(li)
        console.log("testando");
    })
}