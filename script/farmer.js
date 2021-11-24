function Farmer() {
    var self = this
    this.sprite = document.getElementById('farmer')
    this.farmerPos = 0

    this.moveRight = function () {
        if (self.farmerPos <= 740) { // que calcule según el ancho del farmer
            self.farmerPos += 10
            self.sprite.style.left = self.farmerPos + 'px'
        }
    }
    this.moveLeft = function () {
        if (self.farmerPos >= 10) {
            self.farmerPos -= 10
            self.sprite.style.left = self.farmerPos + 'px'
        }
    }
}
