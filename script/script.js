const farmer = document.getElementById('farmer')
const canvas = document.getElementById('canvas')
var farmerPos = 0

function moveFarmerRight() {
    if (farmerPos <= 740) { // que calcule según el ancho del farmer
        farmerPos += 10
        farmer.style.left = farmerPos + 'px'
    }
}

function moveFarmerLeft() {
    if (farmerPos >= 10) {
        farmerPos -= 10
        farmer.style.left = farmerPos + 'px'
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

