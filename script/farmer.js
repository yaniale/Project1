function Farmer() {
    this.sprite = document.getElementById('farmer')
    this.farmerPos = 0

    this.moveRight = function() {
        if (this.farmerPos <= 740) { // que calcule según el ancho del farmer
            this.farmerPos += 10
            this.sprite.style.left = this.farmerPos + 'px'
        }
    }
    this.moveLeft = function() {
        if (this.farmerPos >= 10) {
            this.farmerPos -= 10
            this.sprite.style.left = this.farmerPos + 'px'
        }
    }
    
}
