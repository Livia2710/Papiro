var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
    var clientes = document.querySelectorAll(".cliente");
if(this.value.length > 0){
    for(var cli=0; cli < clientes.length; cli++){
        var cliente=clientes[cli];
        var nome=cliente.querySelector(".nome").textContent;
        //RegExp precisa de dois parametros, o que quero pegar e que tipo de busca eu quero. O "i" é de insentive, ou seja tanto faz se a letra é maiscula ou minuscula, até pegando pelo final do nome.
        //Busca com Expressão Regular
        // var expressao = new RegExp(this.value, "i");
        //Verifica se o nome digitado é igual ao do contador
        //if(!expressao.test(nome))

        //Busca vom substring
        //o this.value permiti vizualizar o conteudo do campo
        var comparavel = nome.substring(0, this.value.legth);
        var comparavelMinu = comparavel.toLowerCase();
        var filtroBuscaMinu = this.value.toLowerCase();

        if(filtroBuscaMinu!=comparavelMinu){
            //Torna invisivel
            cliente.classList.add("invisivel");
        } else{
            //Deixa visivel
            cliente.classList.remove("invisivel");
        }
    }
} else {
    //Não há filtro de busca, exibe a lista completa
    for(var cli=0; cli<clientes.length; cli++){
        clientes[cli].classList.remove("invisivel");
    }
}

})