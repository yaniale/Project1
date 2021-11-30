const canvas = document.getElementById('canvas')
const title = document.getElementById('title')
const farmer = new Farmer()
let cows = []
const ufo = new Ufo()

const audio = {
  xfiles: document.getElementById('audioFondo'),
}
audio.xfiles.volume = 0.1

// **Contadores***
var life = 1
var lifeCounter = document.getElementById('life')

var cowCount = 0
var cowCountHTML = document.getElementById('cow-counter')

var level = 1
var levelHTML = document.getElementById('level')

var gameRunning = false

let musicPlaying = false
// ***movimeintos del sprite***
window.addEventListener('keydown', function (event) {
  if (!musicPlaying) {
    audio.xfiles.play()
    musicPlaying = true
  }
  if (event.code === 'ArrowRight') {
    farmer.moveRight()
  }
  if (event.code === 'ArrowLeft') {
    farmer.moveLeft()
  }
})

  let startBtn = document.createElement('button')
  startBtn.classList.add('restartBtn')
  startBtn.addEventListener('click', hideTitle)
  title.appendChild(startBtn)

  function hideTitle() {
    title.style.display = 'none'
    console.log(title)
    canvas.style.display = 'block'
    startGame()
  }
  
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
  if (cows.length > 0 && cows[0].y === 585) {
    cows[0].die()
    cows.shift()
    lifeCounter.innerText = --life
  }
}

function showGameOver() {
  var gameOver = document.createElement('div')
  gameOver.setAttribute('id', 'game-over')
  canvas.appendChild(gameOver)
  gameOver.classList.add('gameOver', 'blink')
  gameOver.innerText = 'GAME OVER'
  var restartHTML = document.createElement('button')
  restartHTML.setAttribute('id', 'restartbutton')
  restartHTML.classList.add('restartBtn')
  canvas.appendChild(restartHTML)
  restartHTML.addEventListener('click', reset)
}

// ***game over: sprite sin vidas y dejan de aparecer cows***
function reset() {
  var gameOver = document.getElementById('game-over')
  canvas.removeChild(gameOver)
  let elem = document.getElementById('restartbutton')
  if (elem) {
    elem.parentNode.removeChild(elem)
  }
  startGame()
}

function checkGameOver() {
  if (life === 0) {
    clearInterval(timerUfo)
    clearInterval(timerNewCow)
    clearInterval(timerCow)
    gameRunning = false
    cows.forEach(cow => { cow.die() })
    cows = []
    showGameOver()
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
    youwinHTML.classList.add('nextLevel', 'blink')
    youwinHTML.innerText = `Next Level`

    // Despues de X segundos
    setTimeout(
      function () {
        youwinHTML.parentNode.removeChild(youwinHTML)

        // Carga fase 2
        speedUfo -= 5
        speedCow -= 500
        cowCount = 0
        cowCountHTML.innerText = 0
        levelHTML.innerText = ++level

        // resetear vacas
        cows.forEach(cow => { cow.die() })
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
  if (!gameRunning) {
    life = 1
    lifeCounter.innerText = life
    cowCount = 0
    cowCountHTML.innerText = cowCount
    level = 1
    levelHTML.innerText = level
    gameRunning = true
  }

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
    cows.push(new Cow(ufo.x + 50))
  }, speedCow);
}