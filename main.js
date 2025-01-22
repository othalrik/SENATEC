var btnCadastrarEmail =document.querySelector(".footer_botao");
var emailDigitado =document.querySelector(".footer_input"); 
var PopUpMensagem = document.querySelector(".PopUp-Mensagem");
var mensagemDoPopUp = document.querySelector(".Mensagem");
var fundoDesfocado = document.querySelector(".PopUp-background");
var botaoFecharMensagem = document.querySelector(".PopUp-mensagem_fechar");



btnCadastrarEmail.addEventListener('click', ()=>{
    if(!validarEmail(emailDigitado.value)){
        fundoDesfocado.style.display="block";
        PopUpMensagem.style.display="block";
        mensagemDoPopUp.innerHTML="sinto muito, voce nao digitou um E-mail valido!";



    }
    else{
        fundoDesfocado.style.display="block";
        PopUpMensagem.style.display="block";
        mensagemDoPopUp.innerHTML="E-mail cadastrado com sucesso!";


    }
    emailDigitado.value=""

    
})
botaoFecharMensagem.addEventListener('click', ()=>{
    fundoDesfocado.style.display="none";
    PopUpMensagem.style.display="none";
})

fundoDesfocado.addEventListener('click', ()=>{
    fundoDesfocado.style.display="none";
    PopUpMensagem.style.display="none";
})




function validarEmail(email) {
    const expressaoRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expressaoRegular.test(email);
}

    var botaoMenu = document.querySelector(".cabecalho__menu");
    var menuLateral= document.querySelector(".cabecalho__menu--links");

    botaoMenu.addEventListener('click', () => {
        menuLateral.classList.toggle("menu-lateral-ativo");
    })