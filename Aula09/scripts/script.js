const inputTarefa = document.getElementById("inputTarefa")
const botaoAdd = document.getElementById("botaoAdd")
const listaTarefas = document.getElementById("listaTarefas")
const form = document.getElementById("form")

// criando uma lista vazia

let tarefas = []
atualizar()

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let tarefa = inputTarefa.value.trim()
    adicionar(tarefa)
})

function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem("tarefas")
    if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas)
    }
}

function atualizar() {
    carregarTarefas()
    listaTarefas.innerHTML = "";
    let index = 0
    tarefas.forEach(tarefa => {
        const li = document.createElement("li");
        li.innerText = tarefa;
        li.index = index
        li.status = false
        li.className = "itemLista"
        listaTarefas.appendChild(li)
        li.addEventListener("click", () => {
            li.style.backgroundColor = "#a8ffbbff"
            setTimeout(remover, 200, li.index)
        })
        index++
    })
}

function adicionar(tarefa) {
    if (tarefa != "") {
        tarefas.unshift(tarefa);
        salvarTarefas()
        atualizar();
    }
    inputTarefa.value = ""
}

function remover(index) {
    tarefas.splice(index, 1)
    salvarTarefas()
    atualizar()
}