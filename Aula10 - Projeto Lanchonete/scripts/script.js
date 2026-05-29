const input = document.getElementById("input")
const btnAdd = document.getElementById("btnAdd")
const lista = document.getElementById("lista")
const btnAtender = document.getElementById("btnAtender")
const pedidoAtual = document.getElementById("pedidoAtual")

let pedidos = []
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
    let pedido = input.value.trim()
    adicionar(pedido)
    input.value = ""
})

function atualizar() {
    localPedidos()
    lista.innerHTML = ""
    let idx = 0;
    pedidos.forEach(pedido => {
        let li = document.createElement("li")
        li.innerText = pedido
        lista.appendChild(li)
        li.idx = idx

        li.addEventListener("click", () => {
            li.style.textDecoration = "line-through"
            btnF.style.textDecoration = ""
        })

        let btnF = document.createElement("img")
        btnF.src = "assets/trash-can.png"
        li.appendChild(btnF)

        btnF.addEventListener("click", () => {
            apagar(li.idx)
        })
        idx++
    })
}

btnAtender.addEventListener("click", () => {
    pedidoAtual.innerHTML = ""
    const att = document.createElement("li")
    att.innerText = pedidos[0]
    if (pedidos.length > 0) {
        pedidoAtual.innerText = "Atendendo:"
        pedidoAtual.appendChild(att)
        apagar(0)
    } else {
        pedidoAtual.innerText = "Nenhum pedido sendo atendido"
    }
})

function apagar(index) {
    pedidos.splice(index, 1)
    armazenar()
    atualizar()
}

function adicionar(input) {
    if (input != "") {
        pedidos.push(input)
        armazenar()
        atualizar()
    }
}