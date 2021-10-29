const dino = document.querySelector(".dino");

function handleKeyUp (event) {
    if (event.keyCode === 32) {
        jump();
    }
}

function jump () {
    let position = 0;

    let upInterval = setInterval(() => {
      if (position >= 150) {
          clearInterval(upInterval);
      } else {    
    
      
      //subindo
        position += 20;

       dino.style.bottom = position + 'px';

    }, 20);
}}

document.addEventListener('keyup', handleKeyUp);

/*document.addEventListener('keyup', function () {
    console.log ('pressionou uma tecla')
})
*/