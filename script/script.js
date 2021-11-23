
const canvas = document.getElementById('canvas')
const farmer = new Farmer()
const cow = new Cow()

window.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowRight') {
        farmer.moveRight()
    }
    if (event.code === 'ArrowLeft') {
        farmer.moveLeft()
    }
})

function collisionDetection() {
    if ( cow.x < farmer.x + farmer.width  &&
         cow.y < farmer.y + farmer.height &&
        cow.x + cow.width  > farmer.x &&
        cow.y + cow.height > farmer.y) {
       alert('AAAY')
   }
}

//let timerId = setInterval(cow.moveCow,50); 
function startGame () {
    setInterval(function(){
//mover vaca
//detectar colisiones

    })

}