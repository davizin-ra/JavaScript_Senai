const inputTarefa = document.getElementById("inputTarefa")
const botaoAdd = document.getElementById("botaoAdd")
const listaTarefas = document.getElementById("listaTarefas")
const form = document.getElementById("form")

// criando uma lista vazia

let tarefas = [];

atualizar()
const dataAtual = new Date()
console.log(dataAtual);


form.addEventListener("submit", (e) => {
    e.preventDefault()
    let tarefa = inputTarefa.value.trim()
    if(tarefa != ""){
        tarefas.push(tarefa)
        console.log(tarefa);
        console.log(tarefas);
        atualizar();
    }
})

function atualizar() {
    listaTarefas.innerHTML = "";
    tarefas.forEach(tarefa => {
        const li = document.createElement("li");
        li.innerText = tarefa;
        li.className = "itemLista"
        listaTarefas.appendChild(li)
    })
}
