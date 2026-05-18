# Introdução ao JavaScript

## Variáveis

```js
let nome = "Davi";
const idade = 18;
var cidade = "Ribeirão Pires";
```

### Exibindo informações

```js
console.log(nome);
console.log(idade);
```

### Alterando variável com `let`

```js
nome = "Iago";
console.log(nome);
```

### Concatenação

```js
console.log(nome + cidade);

console.log("Nome: " + nome + ", cidade: " + cidade);
```

### Interpolação

```js
console.log(`Nome: ${nome}, cidade: ${cidade}`);
```

---

# Tipos Primitivos

## String

```js
let mensagem = "Olá, mundo!";
console.log(typeof mensagem);
```

## Number

```js
let idade = 30;
let temperatura = 30.5;

console.log(typeof idade);
console.log(typeof temperatura);
```

## Boolean

```js
let estaChovendo = true;

console.log(typeof estaChovendo);
```

## Undefined

```js
let nome;

console.log(typeof nome);
```

## Null

```js
let endereco = null;

console.log(typeof endereco);
```

---

# Conversão de Tipos

## Conversão Implícita

```js
let soma = "5" + 3;
let sub = "5" - 3;

console.log(typeof soma);
console.log(soma);

console.log(typeof sub);
console.log(sub);
```

## Conversão Explícita

### Converter para número

```js
let numero = "42";
let convertido = Number(numero);

console.log(convertido);
```

### Converter para string

```js
let numero2 = 100;
let converteStr = String(numero2);

console.log(converteStr);
```

# Arrays

```js
let frutas = ["maçã", "banana", "uva"];
```

## Exibindo array

```js
console.log(frutas);
```

## Acessando posição

```js
console.log(frutas[2]);
```

## Quantidade de itens

```js
console.log(frutas.length);
```

---

# Objetos

```js
let pessoa = {
    nome: "Pedro",
    idade: 25
};
```

## Exibindo objeto

```js
console.log(pessoa);
```

## Acessando propriedades

```js
console.log(pessoa.nome);
console.log(pessoa.idade);
```

---

# Array de Objetos

```js
let cachorros = [
    {
        nome: "jake",
        raca: "sapeca",
    },
    {
        nome: "lupita",
        raca: "tranquilidade",
    },
]
```

## Exibindo array

```js
console.log(cachorros);
```

---

# Entrada e Saída de Dados

## Prompt

```js
let nome = prompt("Digite seu nome:");
```

## Alert

```js
alert(`Olá, ${nome}`);
```