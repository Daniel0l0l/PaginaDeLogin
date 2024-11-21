function test(){
    
    //USUARIO
    
    var usuario =document.getElementById("uso");
        var VAL_USER = usuario.value;
        localStorage.setItem("usuario", VAL_USER);
        
    //SENHA

    var senha =document.getElementById("sen");
        var VAL_PASSWORD = senha.value;
        localStorage.setItem("senha", VAL_PASSWORD);

    //BOTAO INICIAR

    var inicio =document.getElementById("ini");

}