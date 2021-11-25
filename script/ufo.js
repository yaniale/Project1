function Ufo() {
  var self = this
  this.ovni = document.getElementById('ufo')
  this.x = 0
  this.y = 20
  this.width = 180
  this.direction = 1

  this.moveUfo = function () {
    self.x += 5 * self.direction
    self.ovni.style.left = `${self.x}px`
    if (self.x >= 600 || self.x === 0) {
      self.direction *= -1
    }
  }
}