/*
let numeros = [1, 2, 3, 4];

let numerosDobro = numeros.map(num => num * 2);

console.log(numeros)
console.log(numerosDobro)
*/

/*
let idade = 18
let resposta = (idade > 75) ? "idoso" : (idade >= 18) ? "maior de idade" : "menor de idade"

console.log(resposta)
*/

/*
let numeros = [5, 10, 15, 20];
let maiores = numeros.filter(num => num > 10)

console.log(maiores);
*/

/*
let numeros = [1, 2, 3, 4];

let soma = numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log(soma);
*/

/*
const produtos = [
    {
        id: 1,
        nome: "Teclado",
        preco: 50
    },
    {
        id: 2,
        nome: "Mouse",
        preco: 30
    },
]

let item = produtos.find(produto => produto.id === 2)

console.log(item)
*/

/*
let frase = "Js é muito bom!"

let palavras = frase.split(" ")
console.log(palavras)
*/

/*
let nome = "       Davizin         ";
let nomeLimpo = nome.trim();

console.log(nomeLimpo);
*/

/*
let frutas = ["banana", "maçã"]
let frutaExiste = frutas.includes("banana")

console.log(frutaExiste);
*/

/*
let nome = "Davizin";

console.log(nome.toLowerCase()) // davizin
console.log(nome.toUpperCase()) // DAVIZIN
*/

/*
let numeros = [1, 3, 5, 8]

let temPar = numeros.some(num => num % 2 === 0)
console.log(temPar)

let todosPar = numeros.every(num => num % 2 === 0)
console.log(todosPar)
*/

/*
let numeros = [4, 23, 1, 6]
let letras = ["c", "f", "a", "b"]

letras.sort()
numeros.sort((a, b) => a - b)

console.log(letras + numeros)

numeros.reverse();
console.log(numeros)
*/

/*
let palavras = ["JS", "é", "muito", "bom"]
let frase = palavras.join(" ");

console.log(frase)
*/

/*
let lista = ["A", "B"]

lista.pop()
lista.push("C")

console.log(lista)
*/

/*
let lista = ["B", "C"]

lista.shift()
lista.unshift("A") 

console.log(lista)
*/

/*
let numeros = [1, 2, 3, 4]
let copia = numeros.slice(1, 3) // não inclui a posição final

console.log(copia) // retorna 2, 3
*/

/*
let numeros = [1, 2, 3, 4]
numeros.splice(1, 1) // (posição, quantidade de itens a serem removidos)

console.log(numeros)
*/

/*
let frutas = ["Maçã", "Banana", "Manga", "Abacaxi"]
frutas.splice(0, 3, "Limão", "Kiwi") // (posição, quantidade de itens a serem removidos, item adicionado 1, item adicionado 2)

console.log(frutas)
*/

/*
let frutas = ["Maçã", "Banana", "Manga"];
frutas.splice(2, 0, "Limão", "Kiwi");

console.log(frutas)
*/

/*
let texto = "Hello World"
let novoTexto = texto.replace("World", "Javascript")

console.log(novoTexto)
*/

let textoP = document.getElementById("texto");
let saudacao = prompt("Digite uma saudação ( Bom dia ): ");

textoP.textContent = saudacao === "Bom dia" ? saudacao : "QUINTOOOU!!";