let idade = document.querySelector('#idade');
let verificacao = document.querySelector('.verificacao');
let regras = document.querySelector('.regras');
let game = document.getElementById('jokenpo');
let resposta = document.getElementById('resposta');
let btnVerificacao = document.getElementById('btn-verificacao');
let imagem = document.createElement('img');
let containerPrincipal = document.querySelector('container-principal');
imagem.width = 120;
let resultado = document.createElement('div');
resultado.classList.add('resultado');
let containerGame = document.getElementById('game');


let btnRegras = document.createElement('button');
btnRegras.onclick= () => vejaRegras();
btnRegras.textContent = "Veja as Regras";


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

function vamosAoJogo(){
   regras.style.display = "none";
   game.style.display = "grid";
}

function jogar(){
   let escolhaJogador = document.querySelector('input[name="jokenpo"]:checked')
   let imagens = ['./src/img/pedra.png', './src/img/papel.png', './src/img/tesoura.png','./src/img/lagarto.png', './src/img/spok.png'];
   let opcoes = ['pedra', 'papel', 'tesoura', 'lagarto', 'spok'];
   let index = Math.floor(Math.random() * 5 );
   let escolhaComputador = opcoes[index];
   

   if(escolhaComputador === "tesoura" && escolhaJogador === "papel"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[2]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[1]}" />
         </div>
         <span> Você perdeu, Tesoura corta Papel </span>
      </section>
      `
   }else if(escolhaComputador === "papel" && escolhaComputador === "pedra"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[1]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[0]}" />
         </div>
         <span> Você perdeu, Papel cobre pedra </span>
      </section>
      `
   }else if(escolhaComputador === "pedra" && escolhaJogador === "lagarto"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[0]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[3]}" />
         </div>
         <span> Você perdeu, Pedra esmaga Lagarto </span>
      </section>
      `
   }else if(escolhaComputador === "lagarto" && escolhaJogador === "spok"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[3]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[4]}" />
         </div>
         <span> Você perdeu, Lagarto envenena Spock </span>
      </section>
      `
   }else if(escolhaComputador === "spok" && escolhaJogador ==="tesoura"){
           resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[3]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[2]}" />
         </div>
         <span> Você perdeu, Spock derrete Tesoura </span>
      </section>
      `
   }else if(escolhaComputador === "tesoura" && escolhaJogador === "lagarto"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[2]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[3]}" />
         </div>
         <span> Você perdeu, Tesoura decapita Lagarto </span>
      </section>
      `
   }else if(escolhaComputador === "lagarto" && escolhaJogador === "papel"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[3]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[1]}" />
         </div>
         <span> Você perdeu, Lagarto come Papel </span>
      </section>
      `
   }else if(escolhaComputador === "papel" && escolhaJogador === "spok"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[1]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[4]}" />
         </div>
         <span> Você perdeu, Papel refuta Spock </span>
      </section>
      `
   }else if(escolhaComputador === "spok" && escolhaJogador === "pedra"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[4]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[0]}" />
         </div>
         <span> Você perdeu, Spock vaporiza Pedra </span>
      </section>
      `
   }else if(escolhaComputador === "pedra" && escolhaJogador === "tesoura"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[0]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[2]}" />
         </div>
         <span> Você perdeu, Pedra amassa Tesoura </span>
      </section>
      `
   }else if(escolhaJogador === "tesoura" && escolhaComputador === "papel"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[2]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[1]}" />
         </div>
         <span> Você Ganhou, Tesoura corta Papel </span>
      </section>
      `
   }else if(escolhaJogador === "papel" && escolhaComputador === "pedra"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[1]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[0]}" />
         </div>
         <span> Você Ganhou, Papel cobre Pedra </span>
      </section>
      `
   }else if(escolhaJogador === "pedra" && escolhaComputador === "lagarto"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[0]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[3]}" />
         </div>
         <span> Você Ganhou, Pedra esmaga Lagarto </span>
      </section>
      `
   }else if(escolhaJogador === "lagarto" && escolhaComputador === "spok"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[3]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[4]}" />
         </div>
         <span> Você Ganhou, Lagarto envenena Spock </span>
      </section>
      `
   }else if(escolhaJogador === "spok" && escolhaComputador === "tesoura"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[4]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[2]}" />
         </div>
         <span> Você Ganhou, Spock derrete tesoura </span>
      </section>
      `
   }else if(escolhaJogador === "tesoura" && escolhaComputador === "lagarto"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[2]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[3]}" />
         </div>
         <span> Você Ganhou, Tesoura decapita Lagarto </span>
      </section>
      `
   }else if(escolhaJogador === "lagarto" && escolhaComputador === "papel"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[3]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[1]}" />
         </div>
         <span> Você Ganhou, Lagarto come Papel </span>
      </section>
      `
   }else if(escolhaJogador === "papel" && escolhaComputador === "spok"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[1]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[4]}" />
         </div>
         <span> Você Ganhou, Papel refuta Spock </span>
      </section>
      `
   }else if(escolhaJogador === "spok" && escolhaComputador === "pedra"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[4]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[0]}" />
         </div>
         <span> Você Ganhou, Spock vaporiza Pedra </span>
      </section>
      `
   }else if(escolhaJogador === "pedra" && escolhaComputador === "tesoura"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[0]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[2]}" />
         </div>
         <span> Você Ganhou, Pedra amassa Tesoura </span>
      </section>
      `
   }
   containerGame.appendChild(resultado);
}