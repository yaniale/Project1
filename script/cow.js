function Cow(x=0) {
  var self = this
  this.x = x
  this.y = 100
  this.height = 50
  this.width = 80

  this.cow = document.createElement('div')
  this.cow.classList.add('cow')
  this.cow.style.left = `${this.x}px`
  this.cow.style.top = `${this.y}px`
  document.getElementById('canvas').appendChild(this.cow)

  this.moveCow = function () {
    this.y += 5
    this.cow.style.top = `${this.y}px`
    if (this.y === 595) {
      canvas.removeChild(self.cow)
    }
  }
}
