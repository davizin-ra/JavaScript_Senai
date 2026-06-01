const cepMockados = {
    "01001000": {
        logradouro: "Rua cumbica",
        bairro: "Santa Luzia",
        localidade: "Ribeirão Pires",
        uf: "SP"
    },
    "20040002": {
        logradouro: "Rua da Assembleia",
        bairro: "Centro",
        localidade: "Rio de Janeiro",
        uf: "RJ"
    },
    "30140071": {
        logradouro: "Rua São Paulo",
        bairro: "Parque das Fontes",
        localidade: "Ribeirão Pires",
        uf: "SP"
    }
}

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
    if (cep.length !== 8){
        alert("CEP inválido");
        limparCapos();
        return;
    }

    const dadosCep =  cepMockados[cep]

    if(!dadosCep){
        alert("CEP não encontrado ma base de dados")
        limparCapos();
        return;
    }

    preencherCampos(dadosCep)
}

btnBuscar.addEventListener("click", buscarCep)