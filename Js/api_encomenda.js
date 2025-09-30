var botaoAPi = document.querySelector("#api-encomenda");

botaoAPi.addEventListener("click", function(){
    //Consome API
    var api = new XMLHttpRequest();
    api.open("GET", "http://localhost:3000/encomendas_web");
    api.addEventListener("laod", function(){
        //Formata os dados vindo do JSON
        var resposta = JSON.parse(api.responseText);

        //Passa por cada item do JSON e adiciona na tabela
        resposta.forEach(function(encomendaAPI){adicionarEncomendaTabela(encomendaAPI)});

    })
    api.send();
})