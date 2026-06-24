const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const scoreElement = document.querySelector('.score');

const gameOverModal = document.querySelector('.game-over-screen');
const scoreFinalElement = document.querySelector('.final-score') ;


let score = 0;
let canoScore = true;

const jump = () => {
  mario.classList.add('jump');
 
  setTimeout(()=>{
    mario.classList.remove('jump');
  }, 500);
  
}

 const loop = setInterval(()=>{
 const pipePosition = pipe.offsetLeft;
 const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');

  if (pipePosition <= 120 && pipePosition > 0  && marioPosition < 110 ){
    
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    console.log(marioPosition);

    mario.src = './sprites/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    scoreFinalElement.textContent = score;
    gameOverModal.classList.remove('hide');

    clearInterval(loop);

  }

if (pipePosition < 30 && canoScore) {
    score++;
    scoreElement.textContent = score;
    canoScore = false;
  }

  if (pipePosition > 120) {
    canoScore = true; 
  }

 
}, 10);

document.addEventListener('keydown', jump);
document.addEventListener("mousedown", jump);
 