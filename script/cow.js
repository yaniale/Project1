function Cow(x = 0) {
  this.x = x
  this.y = 120
  this.height = 50
  this.width = 80

  //***creamos las vacas***
  this.cow = document.createElement('div')
  this.cow.classList.add('cow')
  this.cow.style.left = `${this.x}px`
  this.cow.style.top = `${this.y}px`
  document.getElementById('canvas').appendChild(this.cow)

  this.audio =  document.getElementById('audioCow')

  this.moveCow = function () {
    this.y += 5
    this.cow.style.top = `${this.y}px`
  }

  this.die = function() {
    this.audio.play()
    this.cow.classList.remove('cow')
    this.cow.classList.add('deadCow')
    setTimeout(function(){
      this.cow.parentNode.removeChild(this.cow)
    }.bind(this) ,1000)
  }
}
