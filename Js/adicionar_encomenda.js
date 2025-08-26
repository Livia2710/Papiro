var tabela = document.querySelectorAll(".cliente");
var botaoAdicionar = document.querySelector("#adicionar");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); 
    console.log("Botão clicado")
    Adicionar();
   
});

function Adicionar() {
    
    var linha = document.createElement("tr");
    linha.textContent = tabela
    console.log("linha nova")
    var coluna = document.createElement("td");
    console.log("coluna nova")
    linha.appendChild(coluna);
}
