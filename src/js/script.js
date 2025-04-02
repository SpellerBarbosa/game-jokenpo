let idade = document.querySelector('#idade');
let verificacao = document.querySelector('.verificacao');
let regras = document.querySelector('.regras');
let game = document.getElementsByClassName('game');
let resposta = document.getElementById('resposta');
let btnVerificacao = document.getElementById('btn-verificacao');

let btnRegras = document.createElement('button');
btnRegras.onclick= () => vejaRegras();
btnRegras.textContent = "Veja as Regras"


function verificar (){
 const idadeNumber = parseInt(idade.value);

 if(isNaN(idadeNumber)){
    resposta.innerHTML = "Digite sua idade em numeros por favor.";
    resposta.classList.add('error');
    return
 }

 if(idadeNumber < 18){
    resposta.innerHTML = "Para jogar esse jogo tem que ter no minimo 18 anos.";
    resposta.classList.add('error');
 }else{
    resposta.innerHTML = "Vamos começar ? Clique no botão para ver as regras";
    resposta.classList.remove('error');
    resposta.classList.add('sucesso');
    btnVerificacao.classList.add('btnVerificacao');

    verificacao.appendChild(btnRegras);
    return
 }

}

function vejaRegras (){
    verificacao.style.display = 'none';
    regras.style.display = 'flex';
}

console.log(verificacao)