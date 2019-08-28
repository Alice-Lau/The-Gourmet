const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

const _current = Symbol();

class About {
    constructor() {
        this[_current] = 0
    }
}

const about = new About();

console.log(leftArrow)
console.log(rightArrow)
console.log(about)

leftArrow.addEventListener("click", function () {
    if (about[_current] <= 0) {
        leftArrow.disabled = true
    } else {
        leftArrow.disabled = false
        rightArrow.disabled = false
        about[_current]--
    }
})

rightArrow.addEventListener("click", function () {
    if (about[_current] >= 2) {
        rightArrow.disabled = true
    } else {
        rightArrow.disabled = false
        leftArrow.disabled = false
        about[_current]++
    }
})