function Cow() {
    var self = this
    this.cow = document.getElementById('cow')
    this.pos = 0


    this.moveCow = function () {
        self.pos = self.pos + 5
        self.cow.style.top = self.pos + 'px';
            
            if (self.pos === 600) {
                alert('BOOM!!!')
            }
        } 
}
