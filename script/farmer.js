function Farmer() {
  var self = this
  this.sprite = document.getElementById('farmer')
  this.x = 0
  this.y = 540
  this.width = 65
  this.height = 120

  this.moveRight = function () {
    if (self.x <= 720) {
      self.x += 10
      self.sprite.style.left = `${self.x}px`
      self.sprite.classList.add('flip')
    }
  }
  this.moveLeft = function () {
    if (self.x >= 10) {
      self.x -= 10
      self.sprite.style.left = `${self.x}px`
      self.sprite.classList.remove('flip')
    }
  }

}
