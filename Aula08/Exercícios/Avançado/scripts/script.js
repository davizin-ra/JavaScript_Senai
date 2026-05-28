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

function atualizar() {
    listaTarefas.innerHTML = "";
    let index = 0
    tarefas.forEach(tarefa => {
        const li = document.createElement("li");
        index++
        li.innerText = tarefa;
        li.index = index
        li.status = false
        li.className = "itemLista"
        listaTarefas.appendChild(li)
        li.addEventListener("dblclick", () => {
            li.style.backgroundColor = "#ff5e5eff"
            setTimeout(remover, 200, li.index)
        })
        li.addEventListener("click", () => {
            if (!li.status) {
                setTimeout(() => {
                    li.style.backgroundColor = "#b5ff9eff"
                }, 300)
                li.status = true
            } else {
                setTimeout(() => {
                    li.style.backgroundColor = "rgb(180, 180, 180)"
                }, 300)
                li.status = false
            }
        })
    })
}

function adicionar(tarefa) {
    if (tarefa != "") {
        tarefas.push(tarefa);
        atualizar();
    }
    inputTarefa.value = ""
}

function remover(index) {
    tarefas.splice(index - 1, 1)
    atualizar()
}