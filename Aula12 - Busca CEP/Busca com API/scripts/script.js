const campoCep = document.getElementById("cep");
const btnBuscar = document.getElementById("botaoBuscar");

const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

function preencherCampos(dados) {
    rua.value = dados.logradouro;
    bairro.value = dados.bairro;
    cidade.value = dados.localidade;
    estado.value = dados.uf;
}

function limparCapos() {
    rua.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
}

function buscarCep() {
    // pega o valor digitado no campo e remove tudo que não for número ( \D )
    const cep = campoCep.value.replace(/\D/g, "").trim();
    if (cep.length !== 8) {
        alert("CEP inválido");
        limparCapos();
        return;
    }

    // consumindo API

    const url = `https://viacep.com.br/ws/${cep}/json/`

    // faz a requisição HTTP para a url da api
    fetch(url)
        .then(response => response.json())
        .then(dados => {
            console.log(dados);
            
            // Verifica se retornou erro
            if (dados.erro) {
                alert("CEP não encontrado");
                limparCapos();
                return;
            }
            preencherCampos(dados)
        })
        .catch(() => {
           alert("Erro ao buscar CEP.") 
        })
}

btnBuscar.addEventListener("click", buscarCep)