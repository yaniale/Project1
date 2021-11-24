function Farmer() {
    var self = this
    this.sprite = document.getElementById('farmer')
    this.x = 0
    this.y = 520
    this.width = 65
    this.height = 120

    // this.direction = 1    
    
    // this.move = function() {
    //     if (self.direction === 1) {
    //         self.moveRight()
    //     } 
    //     if (self.direction === -1) {
    //         self.moveLeft()
    //     }
    //     if (window.onkeyup) {
    //         self.direction = 0
    //     }
    // }
    this.moveRight = function () {
        if (self.x <= 740) { // que calcule según el ancho del farmer
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
