const panels = document.querySelectorAll('.panel')

function toggleOpen(){
    console.log('Hello')
    this.classList.toggle('open')
}

function toggleActive(e){
    console.log('hi')
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}


panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))

console.log(panels)