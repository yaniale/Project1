function Cow() {
    var self = this
    this.cow = document.getElementById('cow')
    this.y = 0
    this.height = 50
    this.width = 80
    this.x = 0

    this.moveCow = function () {
        this.y += 5
        this.cow.style.top = `${this.y}px`
        if (this.y === 595) {
            alert('BOOM!!!')
            clearInterval(timerCow)
        }
    }
}
