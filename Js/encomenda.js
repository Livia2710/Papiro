// document.querySelector(".total").textContent = 
// document.querySelector(".qtde").textContent * document.querySelector(".unitario").textContent
//Caputura as encomendas da tabela
var clientes = document.querySelectorAll(".cliente");

//Passa por todas as encomendas e calcula o valor total
for(var count=0; count < clientes.length; count++){

    //Quanitdade de encomenda
    var tab_qtde = clientes.querySelector(".qtde").textContent;

    //Vaçorunitario de encomenda
    var tab_unitario = clientes.querySelector(".unitario").textContent;

    //Verifica se a quantidade é valida
    if(tab_qtde >= 1 && !isNaN(tab_qtde)){
        //A quantidade émenor qu 1 ou não é numerica'
        clientes[count].querySelector(".qtde").textContent = "Quantidade invalida";
        clientes[count].style.background = "red";
        clientes[count].style.color = "white"
        
    } else {
        if(tab_unitario<= 0 || isNaN(tab_unitario)){
            clientes[count].querySelector(".unitario").textContent= "R$ Unitario invalido!"
            clientes[count].style.color = "white";
        } else{

        //Calcule e exibe o total
        clientes[count].querySelector(".total").textContent = calculaTotal(tab_qtde,tab_unitario);

        //Envia formulario

        }
      
    }

    
}

//função de calculo do valor totoal
function calculaTotal(qtde,unit){
    var total=0;

    total =qtde * unit;
    return formataValor(total);
}

function formataValor(valor){
    var valor_formatado = valor.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
    return valor_formatado;
}