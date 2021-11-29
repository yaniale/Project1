const canvas = document.getElementById('canvas')
const farmer = new Farmer()
let cows = []
const ufo = new Ufo()

// **Contadores***
var life = 3
var lifeCounter = document.getElementById('life')
lifeCounter.innerText = life

var cowCount = 0
var cowCountHTML = document.getElementById('cow-counter')
cowCountHTML.innerText = cowCount

var level = 1
var levelCounter = document.getElementById('level')
levelCounter.innerText = level


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
    cowCountHTML.innerText = ++cowCount
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
function checkGameOver() {
  if (life === 0) {
    let gameOver = document.createElement('div')
    canvas.appendChild(gameOver)
    gameOver.classList.add('gameOver', 'blink')

    life = 1 //si lo pongo a 0, me sigue restando vidas una vez gameover
    gameOver.innerText = 'GAME OVER'
    clearInterval(timerUfo)
    clearInterval(timerNewCow)
    clearInterval(timerCow)
  }
}

function checkWin() {
  if (cowCount === 2) {
    // stop everything
    clearInterval(timerUfo)
    clearInterval(timerNewCow)
    clearInterval(timerCow)

    // Show div with cool animation
    let youwinHTML = document.createElement('div')
    canvas.appendChild(youwinHTML)
    youwinHTML.classList.add('gameOver', 'blink')
    youwinHTML.innerText = 'You Win'

    // Despues de X segundos
    setTimeout(
      function() {
        youwinHTML.parentNode.removeChild(youwinHTML)

        // Carga fase 2
        speedUfo -= 5
        speedCow -= 500
        cowCount = 0

        // resetear vacas
        cows.forEach(cow => {cow.die()})
        cows = []

        // ovni lo movemos al centro
        ufo.x = 230
        startGame()
      },
      3000
    )
  }
}

//pasar de fase
var speed = 80
var speedUfo = 50
var speedCow = 3000

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
    checkGameOver()
    checkWin()
  }.bind(this), speed)

  timerUfo = setInterval(function () {
    ufo.moveUfo()
  }, speedUfo)

  timerNewCow = setInterval(() => {
    cows.push(new Cow(ufo.x + 65))
  }, speedCow);
}

startGame()