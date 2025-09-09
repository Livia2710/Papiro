//Está pegando a table, ou seja a tabela
var tabela = document.querySelector("table")

// O evento Listenar espera dois parametros, qual evento voc deseja e o que vai acontecer depois
//Escuta o duplo click na linha que será excluida
tabela.addEventListener("dblclick", function(event){

    //Adiciona o efeito ns linha
    event.target.parentNode.classList.add("fadeOut");

     //SetTimeout pede dois paramentros, o que fazer e por quanto tempo.Lembrando que conta por milisegundo 
    // E necessário essa função, pois precisa de um tempo para colocar a classe e depois excluir para os olhos humanos perceberem o efeito
    setTimeout(function(){
        //parentNode pega o elemento pai daquilo que foi clicado
        //Exclui a linha
        event.target.parentNode.remove();
    }, 600)
        

   
});