
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
  var cowPos = null
  var mycow
  cows.forEach(function (cow, index) {
    if (cow.y + cow.height > farmer.y &&
      cow.x < farmer.x + farmer.width &&
      cow.x + cow.width > farmer.x) {
      cowPos = index
      mycow = cow
    }
  })
  if (cowPos !== null) { //null es falsy, entonces indicamos que el valor sea distinto a null
    cows.splice(cowPos, 1)
    mycow.die()
  }
}

function removeCow() {
  if (cows.length > 0 && cows[0].y === 595) {
    cows[0].die()
    cows.shift()
  }
}

function startGame() {
  var timerCow = setInterval(function () {
    cows.forEach(cow => {
      cow.moveCow()
    })
    removeCow()
    collisionDetection()
  }.bind(this), 50)

  var timerUfo = setInterval(function () {
    ufo.moveUfo()
  }, 50)

  var timerNewCow = setInterval(() => {
    cows.push(new Cow(ufo.x + 65))
  }, 3000);
}
startGame()