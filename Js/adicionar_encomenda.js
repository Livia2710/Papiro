// Captura o formulário pelo id correto
var form = document.querySelector("#contatoForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Captura os dados do formulário
    var novaEncomenda = obtemEncomenda(form);

    // Seleciona a tabela onde vamos adicionar a nova linha
    var tabela = document.querySelector("#tabela-clientes");

    // Adiciona a nova linha na tabela
    tabela.appendChild(montaTR(novaEncomenda));

    // Limpa o formulário para a próxima entrada
    form.reset();
});

// Função para obter os dados do formulário
function obtemEncomenda(formulario){
    // Como não há campo produto no formulário, vamos usar o gênero como produto
    var encomenda = {
        nome: formulario.nome.value,
        produto: formulario.genero.value || "Produto não definido", // usa o valor selecionado no select 'genero'
        qtde: formulario.qtde.value,
        unitario: formulario.unit.value
    }
    return encomenda;
}

// Função para montar a linha da tabela
function montaTR(dadosNovaEncomenda){
    var linha = document.createElement('tr');

    linha.appendChild(montaTD(dadosNovaEncomenda.nome));
    linha.appendChild(montaTD(dadosNovaEncomenda.produto));
    linha.appendChild(montaTD(dadosNovaEncomenda.qtde));
    linha.appendChild(montaTD(formataValor(dadosNovaEncomenda.unitario)));
    linha.appendChild(montaTD(calculaTotal(dadosNovaEncomenda.qtde, dadosNovaEncomenda.unitario)));

    return linha;
}

// Função para montar as colunas da tabela
function montaTD(dadoColuna){
    var coluna = document.createElement('td');
    coluna.textContent = dadoColuna;
    return coluna;
}

// Formata o valor para moeda (exemplo: R$ 12,00)
function formataValor(valor){
    var valorNum = parseFloat(valor);
    if (isNaN(valorNum)) {
        return "R$ 0,00";
    }
    return valorNum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Calcula o total (quantidade * valor unitário) formatado
function calculaTotal(qtde, unitario){
    var quantidade = parseFloat(qtde);
    var valorUnit = parseFloat(unitario);

    if (isNaN(quantidade) || isNaN(valorUnit)) {
        return "R$ 0,00";
    }

    var total = quantidade * valorUnit;

    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
