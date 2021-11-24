
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
    if (cow.y + cow.height > farmer.y &&        //quitando los = del if se corrigen las separaciones entre farmer-cow
        cow.x < farmer.x + farmer.width &&
        cow.x + cow.width > farmer.x) {
        alert('AAAY')
    }
}

function startGame() {
    setInterval(function () {
        cow.moveCow()
        collisionDetection()
    }, 50)
}
startGame()