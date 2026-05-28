# Local Storage

## Salvando json

Criando o item "tarefas", e guardando a lista tarefas como json

```js
let tarefas = [];
localStorage.setItem("tarefas", JSON.stringify(tarefas));
```

## Get json

Carregando os itens "tarefas" salvos no localStorage

```js
const tarefasSalvas = localStorage.getItem("tarefas")
```

#### Validando e convertendo para json

```js
const tarefasSalvas = localStorage.getItem("tarefas")
if (tarefasSalvas) {
    tarefas = JSON.parse(tarefasSalvas)
}
```