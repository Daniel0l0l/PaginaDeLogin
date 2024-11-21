
//ESPERA A PAGINA CARREGAR 100% ANTES DE COMEÇAR OS COMANDOS JS
document.addEventListener("DOMContentLoaded", function() {
    //VERIFICA SE EXISTE SESSAO
    if (localStorage.getItem("usuario") && localStorage.getItem("senha"))
    {   
        //RECUPERO A VARIAVEL USUARIO
        var logged_user = localStorage.getItem("usuario");
        var logged_senha = localStorage.getItem("senha");
        
        //INSERE O NOME DO USUARIO LOGADO
        var h3name = document.getElementById("h3_name");
        var teste = document.getElementById("teste");
        
        h3name.innerText = logged_user;
        teste.innerText = logged_senha; 
    }
    else
    {
        //CASO NÃO EXISTA SESSAO, RETORNA A PAGINA LOGIN
        window.location.href = "Pagina_linda.html";
    }
});

function deslogar(){
    localStorage.clear();
    window.location.href = "Pagina_linda.html";
}