
const canvas = document.getElementById('canvas')
const farmer = new Farmer()
const cows = []
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
  cows.forEach(function (cow) {
    if (cow.y + cow.height > farmer.y &&        //quitando los = del if se corrigen las separaciones entre farmer-cow
      cow.x < farmer.x + farmer.width &&
      cow.x + cow.width > farmer.x) {
      alert('AAAY')
      // clearInterval(timerCow)
    }
  })
}

function startGame() {

  var timerCow = setInterval(function () {
    cows.forEach(cow =>{
      cow.moveCow()
    })
    collisionDetection()
  }, 50)

  var timerUfo = setInterval(function () {
    ufo.moveUfo()
  }, 50)

  var timerNewCow = setInterval(() => {
    cows.push(new Cow(ufo.x + 65))
  }, 3000);
}
startGame()