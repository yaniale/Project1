
const canvas = document.getElementById('canvas')
const farmer = new Farmer()
const cow = new Cow()
const ufo = new Ufo()

window.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowRight') {
        farmer.moveRight()
    }
    if (event.code === 'ArrowLeft') {
        farmer.moveLeft()
    }
})

function collisionDetection() {
    if (cow.y + cow.height > farmer.y &&        //quitando los = del if se corrigen las separaciones entre farmer-cow
        cow.x < farmer.x + farmer.width &&
        cow.x + cow.width > farmer.x) {
        alert('AAAY')
        // clearInterval(timerCow)
    }
}

var timerCow
var timerUfo

function startGame() {
   timerCow = setInterval(function () {
        cow.moveCow()
        collisionDetection()
    }, 50)
    
    timerUfo = setInterval (function (){
        ufo.moveUfo()
    }, 30)
}
startGame()