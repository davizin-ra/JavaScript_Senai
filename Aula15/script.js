const nome = prompt("Digite um nome")
const nivel = prompt("Digite seu nível").toUpperCase()
const vendas = parseFloat(prompt("Digite o valor em vendas"))

let result = 0

switch (nivel) {
    case "1":
    case "I":
        if (vendas > 20000) {
            if (vendas > 50000) {
                if (vendas > 80000) {
                    alert(`O vendedor ${nome}, nivel ${nivel}, foi promovido ao nivel II`)
                    break
                }
                result = vendas * 1.35
                alert(`O vendedor ${nome}, nível ${nivel}, deverá receber uma bonificação de ${result}`)
                break
            }
            result = vendas * 1.2
            alert(`O vendedor ${nome}, nível ${nivel}, deverá receber uma bonificação de ${result}`) 
            break
        }
        else if (vendas < 5000) {
            alert(`O vendedor ${nome} nível ${nivel} está em risco de demissão`)
        }
        else {
            result = vendas
            alert(`O vendedor ${nome}, nível ${nivel}, e não receberá bonificação`)
        }
        break

    case "2":
    case "II":
        if (vendas > 90000) {
            if (vendas > 120000) {
                
                if (vendas > 200000) {
                    alert(`O vendedor ${nome}, nivel ${nivel}, foi promovido ao nivel III`)
                    break
                }
                result = vendas * 1.40
                alert(`O vendedor ${nome}, nível ${nivel}, deverá receber uma bonificação de ${result}`)
                break
            }
            result = vendas * 1.25
            alert(`O vendedor ${nome}, nível ${nivel}, deverá receber uma bonificação de ${result}`)
            break
        }

        else if (vendas < 50000) {
            alert(`O vendedor ${nome} nível ${nivel} está em risco de virar nivel I`)
        }
        else {
            result = vendas
            alert(`O vendedor ${nome}, nível ${nivel}, e não receberá bonificação`)
        }
        break
    case "3":
    case "III":
        if (vendas > 210000) {
            
            if ( vendas > 250000) {
                
                if (vendas > 500000) {
                    alert(`O vendedor ${nome}, nivel ${nivel}, virou o dono da firma`)
                    break
                }
                result = vendas * 1.45
                alert(`O vendedor ${nome}, nível ${nivel}, deverá receber uma bonificação de ${result}`)
                break
            }
            result = vendas * 1.30
            alert(`O vendedor ${nome}, nível ${nivel}, deverá receber uma bonificação de ${result}`)
            break
        }

        else if (vendas < 10000) {
            alert(`O vendedor ${nome} nível ${nivel} está em risco de virar nivel II`)
        }
        else {
            result = vendas
            alert(`O vendedor ${nome}, nível ${nivel}, e não receberá bonificação`)
        }
        break
    default:
        alert("Nivel nao encontrado")
}


