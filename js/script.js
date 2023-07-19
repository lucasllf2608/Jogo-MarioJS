const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  mario.classList.add('jump');
 
  setTimeout(()=>{
    mario.classList.remove('jump');
  }, 500);
  
}

const loop = setInterval(()=>{
 const pipePosition = pipe.offsetLeft;
 const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');

 

  if (pipePosition <= 120 && pipePosition > 0  && marioPosition < 100 ){
    
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    console.log(marioPosition);

  }
}, 10);

document.addEventListener('keydown', jump);
document.addEventListener("mousedown", jump);

//https://www.youtube.com/watch?v=r9buAwVBDhA&list=PLzn85sQ8V2VP70sAuh18pd9AM5D4-Uli7&index=71&t=1727s