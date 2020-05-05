export default function TypeNames(nameElement, names, wait = 3000) {
    this.nameElement = nameElement
    this.names = names
    this.txt = ''
    this.nameIndex = 0
    this.wait = parseInt(wait, 10)
    this.type()
    this.isDeleting = false
}



// types a name
TypeNames.prototype.type = function() {
    const currIndex = this.nameIndex % this.names.length
    const fullName = this.names[currIndex]

    
    if (this.isDeleting) { // remove character
        this.txt = fullName.substring(0, this.txt.length - 1)
    }
    else { // add character
        this.txt = fullName.substring(0, this.txt.length + 1)
    }

    this.nameElement.innerHTML = ` <span class="txt">${this.txt}</span>`
    
    
    // Initial typing speed
    let typeSpeed = 300
    if (this.isDeleting) {
        typeSpeed /= 2
    }


    // check for if name complete
    if (!this.isDeleting && this.txt === fullName) {
        typeSpeed = this.wait // will set a end pause before delete name
        this.nameElement.innerHTML = ` <span class="txt" style="background-color:rgb(255, 198, 92); color:rgb(8, 87, 107); border-right:none;">${this.txt}</span>`

        this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        ++this.nameIndex // move to next name
        typeSpeed = 300
    }

    setTimeout(() => this.type(), typeSpeed)
}