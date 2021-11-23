const farmer = document.getElementById('farmer')
const canvas = document.getElementById('canvas')
const cow = document.getElementById('cow')
//this.farmerPos = 0

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

function Cow (){
    this.cowPos = 0
    this.cowDirection = 1

    this.moveCow = function () {
        this.cowPos += 5*this.cowDirection;
        this.cow.style.top = cowPos + 'px';
        if (this.cowPos === 600) {
            alert('BOOM!!!')
        }
      //  if (this.cowPos === farmer.farmerPos){
        //   alert('funciona')
        //}
       
      }
      timerId = setInterval(moveCow,50);
}

Cow()