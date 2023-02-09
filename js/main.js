const cidade = document.getElementById('cidade');
const rua = document.getElementById('endereco');
const estado = document.getElementById('estado');
const mensagemErro = document.getElementById('erro');
const cep = document.getElementById('cep');

async function buscaEndereco(cep) {

    try {

        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const converter = await consultaCep.json();

        if (converter.erro) {
            throw Error('CEP inexistente!')
        }

        cidade.value = converter.localidade;
        rua.value = converter.logradouro;
        estado.value = converter.uf;

        return converter;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inexistente. Tente novamente!</p>`
    };
};

cep.addEventListener("focusout", () => buscaEndereco(cep.value));