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
let btnFechar = document.createElement('button');
btnFechar.textContent = "Fechar Resultado";
btnFechar.classList.add('btnFechar');
btnFechar.onclick = () => fecharResultado();
let intro = document.querySelector('.intro');


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
   
   console.log(escolhaJogador.value)

   if(escolhaComputador === "tesoura" && escolhaJogador.value === "papel"){
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
         <span class="msg"> Você perdeu, Tesoura corta Papel </span>
      </section>
      `
   }else if(escolhaComputador === "papel" && escolhaJogador.value === "pedra"){
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
         <span class="msg"> Você perdeu, Papel cobre pedra </span>
      </section>
      `
   }else if(escolhaComputador === "pedra" && escolhaJogador.value === "lagarto"){
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
         <span class="msg"> Você perdeu, Pedra esmaga Lagarto </span>
      </section>
      `
   }else if(escolhaComputador === "lagarto" && escolhaJogador.value === "spok"){
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
         <span class="msg"> Você perdeu, Lagarto envenena Spock </span>
      </section>
      `
   }else if(escolhaComputador === "spok" && escolhaJogador.value ==="tesoura"){
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
         <span class="msg"> Você perdeu, Spock derrete Tesoura </span>
      </section>
      `
   }else if(escolhaComputador === "tesoura" && escolhaJogador.value === "lagarto"){
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
         <span class="msg"> Você perdeu, Tesoura decapita Lagarto </span>
      </section>
      `
   }else if(escolhaComputador === "lagarto" && escolhaJogador.value === "papel"){
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
         <span class="msg"> Você perdeu, Lagarto come Papel </span>
      </section>
      `
   }else if(escolhaComputador === "papel" && escolhaJogador.value === "spok"){
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
         <span class="msg"> Você perdeu, Papel refuta Spock </span>
      </section>
      `
   }else if(escolhaComputador === "spok" && escolhaJogador.value === "pedra"){
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
         <span class="msg"> Você perdeu, Spock vaporiza Pedra </span>
      </section>
      `
   }else if(escolhaComputador === "pedra" && escolhaJogador.value === "tesoura"){
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
         <span class="msg"> Você perdeu, Pedra amassa Tesoura </span>
      </section>
      `
   }else if(escolhaJogador.value === "tesoura" && escolhaComputador === "papel"){
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
         <span class="msg"> Você Ganhou, Tesoura corta Papel </span>
      </section>
      `
   }else if(escolhaJogador.value === "papel" && escolhaComputador === "pedra"){
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
         <span class="msg"> Você Ganhou, Papel cobre Pedra </span>
      </section>
      `
   }else if(escolhaJogador.value === "pedra" && escolhaComputador === "lagarto"){
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
         <span class="msg"> Você Ganhou, Pedra esmaga Lagarto </span>
      </section>
      `
   }else if(escolhaJogador.value === "lagarto" && escolhaComputador === "spok"){
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
         <span class="msg"> Você Ganhou, Lagarto envenena Spock </span>
      </section>
      `
   }else if(escolhaJogador.value === "spok" && escolhaComputador === "tesoura"){
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
         <span class="msg"> Você Ganhou, Spock derrete tesoura </span>
      </section>
      `
   }else if(escolhaJogador.value === "tesoura" && escolhaComputador === "lagarto"){
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
         <span class="msg"> Você Ganhou, Tesoura decapita Lagarto </span>
      </section>
      `
   }else if(escolhaJogador.value === "lagarto" && escolhaComputador === "papel"){
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
         <span class="msg"> Você Ganhou, Lagarto come Papel </span>
      </section>
      `
   }else if(escolhaJogador.value === "papel" && escolhaComputador === "spok"){
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
         <span class="msg"> Você Ganhou, Papel refuta Spock </span>
      </section>
      `
   }else if(escolhaJogador.value === "spok" && escolhaComputador === "pedra"){
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
         <span class="msg"> Você Ganhou, Spock vaporiza Pedra </span>
      </section>
      `
   }else if(escolhaJogador.value === "pedra" && escolhaComputador === "tesoura"){
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
         <span class="msg"> Você Ganhou, Pedra amassa Tesoura </span>
      </section>
      `
   }else if(escolhaJogador.value === "pedra" && escolhaComputador === "pedra"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[0]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[0]}" />
         </div>
         <span class="msg">Empate, ambos jogaram  pedra</span>
      </section>
      `
   }else if(escolhaJogador.value === "papel" && escolhaComputador === "papel"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[1]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[1]}" />
         </div>
         <span class="msg">Empate, ambos jogaram  Papel</span>
      </section>
      `
   }else if( escolhaJogador.value === "tesoura" && escolhaComputador === "tesoura"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[2]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[2]}" />
         </div>
         <span class="msg">Empate, ambos jogaram  Tesoura</span>
      </section>
      `
   }else if(escolhaJogador.value === "lagarto" && escolhaComputador === "lagarto"){
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[3]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[3]}" />
         </div>
         <span class="msg">Empate, ambos jogaram  Lagarto</span>
      </section>
      `
   }else{
      resultado.innerHTML = `
      <section>
          <div class="cpu">
            <span> Computador escolheu </span>
            <img  src="${imagens[4]}" />
         </div>
         <p> VS </p>
         <div class="player">
            <span> Voce Escolheu </span>
            <img src="${imagens[4]}" />
         </div>
         <span class="msg">Empate, ambos jogaram  Spock</span>
      </section>
      `
   }
   intro.style.display = 'none';
   game.style.display = 'none';
   resultado.appendChild(btnFechar);
   containerGame.appendChild(resultado);
}

function fecharResultado(){
   window.location.reload();
};