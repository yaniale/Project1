function Ufo() {
    var self = this
    this.ovni = document.getElementById('ufo')
    this.x = 0
    this.y = 20
    this.width = 180
    this.direction = 1

    this.moveUfo = function () {
        self.x = self.x + 5
        self.ovni.style.left = `${self.x}px`
        if (self.x + self.width === 800){
           alert('right border')
           
        } 
    
    }
}