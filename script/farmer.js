function Farmer() {
  var self = this
  this.sprite = document.getElementById('farmer')
  this.x = 320
  this.y = 540
  this.width = 110
  this.height = 120

  this.moveRight = function () {
    if (self.x <= 670) {
      self.x += 15
      self.sprite.style.left = `${self.x}px`
      self.sprite.classList.remove('flip')
    }
  }
  this.moveLeft = function () {
    if (self.x >= 10) {
      self.x -= 15
      self.sprite.style.left = `${self.x}px`
      self.sprite.classList.add('flip')
    }
  }

}
