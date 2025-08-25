// document.querySelector(".total").textContent = 
// document.querySelector(".qtde").textContent * document.querySelector(".unitario").textContent
//Caputura as encomendas da tabela
var clientes = document.querySelectorAll(".cliente");

// Passa por todas as encomendas e calcula o valor total
for (var count = 0; count < clientes.length; count++) {

    // Quantidade de encomenda
    var tab_qtde = parseInt(clientes[count].querySelector(".qtde").textContent);

    // Valor unitário de encomenda
    var tab_unitario = parseFloat(clientes[count].querySelector(".unitario").textContent);

    // Verifica se a quantidade é válida
    if (isNaN(tab_qtde) || tab_qtde < 1) {
        clientes[count].querySelector(".qtde").textContent = "Quantidade inválida";
        clientes[count].style.background = "red";
        clientes[count].style.color = "white";
    } 
    // Verifica se o valor unitário é válido
    else if (isNaN(tab_unitario) || tab_unitario <= 0) {
        clientes[count].querySelector(".unitario").textContent = "R$ Unitário inválido!";
        clientes[count].style.background = "red";
        clientes[count].style.color = "white";
    } 
    // Se ambos forem válidos, calcula o total
    else {
        clientes[count].querySelector(".total").textContent = calculaTotal(tab_qtde, tab_unitario);
    }
}

// Função de cálculo do valor total
function calculaTotal(qtde, unit) {
    var total = qtde * unit;
    return formataValor(total);
}

function formataValor(valor) {
    var valor_formatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valor_formatado;
}
