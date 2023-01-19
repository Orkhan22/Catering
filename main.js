const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
const slides = document.querySelectorAll(".side")


let sildew = slides.length - 1
let length = slides.length
let saygac = 1


function left() {
  
    if (saygac === 0) {
        saygac = length

        console.log("left1", ss)
        if (saygac === length) {
            saygac -= 1
            console.log("left44", saygac)
        }
    }
    
    else {
        saygac--
        console.log("left3", saygac)
    }
    console.log(saygac)
    slides.forEach((slide, index) => {
       
        slide.style.transform = `translateX(${(index - saygac) * 100}%)`
    })

    rightBtn.addEventListener("click", () => {

    })
}
console.log(left())
leftBtn.addEventListener("click", left)


saygac = 0

function rightbutton() {

    if (saygac === length - 1) {
        saygac = 0
       
        console.log("right1", saygac)
    }
    else {
        saygac++
        console.log("right2", saygac)
    }
    console.log(saygac)


    slides.forEach((slide, index) => {
        
        slide.style.transform = `translateX(${(index - saygac) * 100}%)`
    })

    
    console.log("saygac");
}
rightBtn.addEventListener("click", rightbutton)

