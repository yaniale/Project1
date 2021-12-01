const canvas = document.getElementById('canvas')
const title = document.getElementById('title')
const farmer = new Farmer()
let cows = []
const ufo = new Ufo()
var gameRunning = false
let musicPlaying = false

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

// ***movimeintos del sprite***
window.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowRight') {
    farmer.moveRight()
  }
  if (event.code === 'ArrowLeft') {
    farmer.moveLeft()
  }
})

//** Start Buton = Inicia el Juego */
  let startBtn = document.createElement('button')
  startBtn.classList.add('startBtn')
  startBtn.addEventListener('click', hideTitle)
  title.appendChild(startBtn)

  function hideTitle() {
    title.style.display = 'none'
    console.log(title)
    canvas.style.display = 'block'
    startGame()

    if (!musicPlaying) {
      audio.xfiles.play()
      musicPlaying = true
    }
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
  if (cowPos !== null) {
    cows.splice(cowPos, 1)
    mycow.die()
    cowCountHTML.innerText = ++cowCount
  }
}

// ***Elimina las cows que llegan al suelo y se pierde vidas***
function removeCow() {
  if (cows.length > 0 && cows[0].y === 585) {
    cows[0].die()
    cows.shift()
    lifeCounter.innerText = --life
  }
}

// *** GAME OVER ***
function showGameOver() {
  var gameOver = document.createElement('div')
  gameOver.setAttribute('id', 'game-over')
  canvas.appendChild(gameOver)
  gameOver.classList.add('gameOver', 'blink')
  gameOver.innerText = 'GAME OVER'
  let audioGameOver = document.getElementById("audioGameOver")
  audioGameOver.volume = 0.3
  audioGameOver.play()
  var restartHTML = document.createElement('button')
  restartHTML.setAttribute('id', 'restartbutton')
  restartHTML.classList.add('restartBtn', 'blink')
  restartHTML.innerText = 'PRESS to TRY AGAIN'
  canvas.appendChild(restartHTML)
  restartHTML.addEventListener('click', reset)
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

function reset() {
  var gameOver = document.getElementById('game-over')
  canvas.removeChild(gameOver)
  let elem = document.getElementById('restartbutton')
  if (elem) {
    elem.parentNode.removeChild(elem)
  }
  startGame()
}

//*** Next Level */
function checkWin() {
  if (cowCount === 5) {
    level++
    clearInterval(timerUfo)
    clearInterval(timerNewCow)
    clearInterval(timerCow)
    let audioWin = document.getElementById("audioWin")
    audioWin.volume = 0.3
    audioWin.play()
    let nextLevelHTML = document.createElement('div')
    canvas.appendChild(nextLevelHTML)
    nextLevelHTML.classList.add('nextLevel', 'blink')
    if (level > 2) {
      nextLevelHTML.innerText = `You Win`
    } else {
      nextLevelHTML.innerText = `Next Level`
      setTimeout(
        function () {
          nextLevelHTML.parentNode.removeChild(nextLevelHTML)
          speedUfo -= 8
          speedCow -= 500
          cowCount = 0
          cowCountHTML.innerText = 0
          levelHTML.innerText = level
  
          cows.forEach(cow => { cow.die() })
          cows = []
  
          ufo.x = 230
          startGame()
          
        }, 3000)
    } 
  }
}

// ***START GAME***
var speed = 80
var speedUfo = 45
var speedCow = 2500
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
