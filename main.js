// main.js

// Função para buscar o valor do euro
function buscarValorEuro() {
    fetch('https://api.hgbrasil.com/finance')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao recuperar os dados da API');
        }
        return response.json();
    })
    .then(data => {
        // Acessando o valor de compra do euro
        const euroBuyValue = data.results.currencies.EUR.buy;
        // Atualizando o conteúdo da tag h1 com o valor do euro
        document.querySelector('.tituloEuro').innerText = `Valor do Euro: R$ ${euroBuyValue.toFixed(2)}`;
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
    });
}

// Chamando a função para buscar e exibir o valor do euro ao carregar a página
window.onload = function() {
    buscarValorEuro();
};
