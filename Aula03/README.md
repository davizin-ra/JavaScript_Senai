# Estrutura condicional

## Exercícios Condicionais - [link](https://sparkling-link-662.notion.site/Exerc-cios-de-Condicionais-32716837961280bb9309dfe403263767)

## If / Else If / Else

Se / Senão Se / Senão

```js
let tipoUsuario = prompt("Digite o tipo do usuário: (admin / cliente)").toLowerCase

if (tipoUsuario == "admin"){
    console.log("Acesso total ao sistema")
} else if (tipoUsuario == "cliente"){
    console.log("Acesso limitado ao sistema")
} else {
    console.log("Tipo de usuário inválido")
}
```

## Switch / Case

Escolha de opções

```js
let tema = prompt("Digite um tema (claro / escuro / azul )")

switch (tema){
    case "claro":
        console.log("Tema claro ativado!")
        break
    case "escuro":
        console.log("Tema escuro ativado!")
        document.body.style.backgroundColor = "#000000"
        break
    case "azul":
        console.log("Tema azul ativado!")
        document.body.style.backgroundColor = "#0000BB"
        break
    default:
        console.log("Tema inválido")
        break
}
```