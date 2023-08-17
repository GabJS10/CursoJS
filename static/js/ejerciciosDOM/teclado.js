const d = document
let x = 0, 
 y = 0;
export function moveBall(e, ball, stage) {
     const $ball = d.querySelector(ball),
          $stage = d.querySelector(stage),
          $limitBall = $ball.getBoundingClientRect(),
          $limitStage = $stage.getBoundingClientRect();

     
     switch (e.keyCode) {
          case 37:
               if($limitBall.left > $limitStage.left)x--;
               break;

          case 38:
               if($limitBall.top > $limitStage.top){
                    y--
               }
               break;

          case 39:
               if($limitBall.right < $limitStage.right)x++;
               break;

          case 40:
               if($limitBall.bottom < $limitStage.bottom)y++;
               break;
          default:
               break;

               
     }

     $ball.style.transform = `translate(${x*10}px,${y*10}px)`
}

export function Shortcuts(e) {

     if (e.ctrlKey && e.key === 'a') {
          e.preventDefault()

          alert('Has presionado la combinacion Ctrl + A')
     }


     if (e.altKey && e.key === 'p') {
          e.preventDefault()

          const text = prompt('Has presionado la combinacion Alt + P')
          console.log(text);
     }

     if (e.shiftKey && e.key === 'c') {
          e.preventDefault()

          const decition = confirm('Has presionado la combinacion Shift + C')
          console.log(decition);
     }
}