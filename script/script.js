const canvas = document.getElementById('canvas')
const farmer = new Farmer()
const cows = []
const ufo = new Ufo()

// **Para los contadores***
var life = 3
var lifeCounter = document.getElementById('life')
lifeCounter.innerText = life

var cowCount = 0
var cowCounter = document.getElementById('cow-counter')
cowCounter.innerText = cowCount

// ***movimeintos del sprite***
window.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowRight') {
    farmer.moveRight()
  }
  if (event.code === 'ArrowLeft') {
    farmer.moveLeft()
  }
})

// ***farmer recoge cows, desaparecen de la pantalla y aumenta el contador***
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
    cowCounter.innerText = ++cowCount
  }
}

// ***elimina las cows que llegan al suelo y se pierde vidas***
function removeCow() {
  if (cows.length > 0 && cows[0].y === 595) {
    cows[0].die()
    cows.shift()
    lifeCounter.innerText = --life
  }
}

// ***game over: sprite sin vidas y dejan de aparecer cows***
function gameOver() {
  let gameOver = document.createElement('div')
  canvas.appendChild(gameOver)
  gameOver.classList.add('gameOver', 'blink')

  if (life < 1) {
    life = 1 //para que cuando terminen de caer el resto de vacas, el contador se quede = 0
    gameOver.innerText = 'GAME OVER'
    clearInterval(timerUfo)
    clearInterval(timerNewCow)
  }
}

// ***START GAME***
var timerCow
var timerUfo
var timerNewCow

function startGame() {
  timerCow = setInterval(function () {
    cows.forEach(cow => {
      cow.moveCow()
    })
    removeCow()
    collisionDetection()
    gameOver()
  }.bind(this), 50)

  timerUfo = setInterval(function () {
    ufo.moveUfo()
  }, 50)

  timerNewCow = setInterval(() => {
    cows.push(new Cow(ufo.x + 65))
  }, 3000);
}

startGame()