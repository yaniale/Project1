function Farmer() {
  var self = this
  this.sprite = document.getElementById('farmer')
  this.x = 0
  this.y = 540 //aumenté un poco la y, para que la vaca se vea encima del farmer en la colisión
  this.width = 65
  this.height = 120

  this.moveRight = function () {
    if (self.x <= 720) { // que calcule según el ancho del farmer
      self.x += 10
      self.sprite.style.left = `${self.x}px`
    }
  }
  this.moveLeft = function () {
    if (self.x >= 10) {
      self.x -= 10
      self.sprite.style.left = `${self.x}px`
    }
  }

}
