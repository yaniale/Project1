const farmer = document.getElementById('farmer')
const canvas = document.getElementById('canvas')
const cow = document.getElementById('cow')

function Farmer() {
    this.farmerPos = 0

    this.moveFarmerRight = function() {
        if (this.farmerPos <= 740) { // que calcule según el ancho del farmer
            this.farmerPos += 10
            farmer.style.left = this.farmerPos + 'px'
        }
    }
    this.moveFarmerLeft = function() {
        if (this.farmerPos >= 10) {
            this.farmerPos -= 10
            farmer.style.left = this.farmerPos + 'px'
        }
    }
    window.addEventListener('keydown', function (event) {
        if (event.code === 'ArrowRight') {
            moveFarmerRight()
        }
        if (event.code === 'ArrowLeft') {
            moveFarmerLeft()
        }
    })
}

Farmer()