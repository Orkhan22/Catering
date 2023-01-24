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




const number1=document.querySelector(".number1")
const number2=document.querySelector(".number2")
const number3=document.querySelector(".number3")
const number4=document.querySelector(".number4")

let say1=0
let say2=0
let say3=0
let say4=0



function num (){
    let saygac1= setInterval(() => {
        
        if(say1==18){
            clearInterval(saygac1)

        }
        else{

            say1++
        }
        number1.textContent=say1
        console.log(say1)
    }, 200);

    let saygac2= setInterval(() => {
        
        if(say2==100){
            clearInterval(saygac2)

        }
        else{

            say2+=2
        }
        number2.textContent=say2
        console.log(say2)
        
    }, 70);

    let saygac3= setInterval(() => {
        
        if(say3==50){
            clearInterval(saygac3)

        }
        else{

            say3+=1
        }
        number3.textContent=say3
        console.log(say3)
        
    }, 70);
    let saygac4= setInterval(() => {
        
        if(say4==15000){
            clearInterval(saygac4)

        }
        else{

            say4+=300
        }
        number4.textContent=say4
        console.log(say4)
        
    }, 70);
}
num()


const menu=document.querySelector("#menu")
const about =document.querySelector("#section2")
const services =document.querySelector("#services")
const home=document.querySelector("#home")

home.addEventListener("click",()=>{
    let say=window.scrollY;
    let interval =setInterval(()=>{
        window.scrollTo(0,say);
        say-=10;
        if(say<=0){
            clearInterval(interval);
          
        }
        console.log(say)
    },5)
    

})


menu.addEventListener("click",()=>{
    let say=window.scrollY;
    let interval =setInterval(()=>{
        window.scrollTo(0,say);
        say+=10;
        if(say>=2100){
            clearInterval(interval);
          
        }
        console.log(say)
    },5)
    

})

about.addEventListener("click",()=>{
    let say=window.scrollY;
    let interval =setInterval(()=>{
        window.scrollTo(0,say);
        say+=10;
        if(say>=680){
            clearInterval(interval);
            
        }
        console.log(say);
    },5)
    
    if(say>=682){

        let intervall= setInterval(() => {
            window.scrollTo(0,say);
            say-=10;
            if(say<=680){
                clearInterval(intervall)

            }
        }, 5);
    }

})

services.addEventListener("click",()=>{
    let say=window.scrollY;
    let interval =setInterval(()=>{
        window.scrollTo(0,say);
        say+=10;
        if(say>=1500){
            clearInterval(interval);
          
        }
        
    },5)
    if(say>=1500){

        let intervall= setInterval(() => {
            window.scrollTo(0,say);
            say-=10;
            if(say<=1500){
                clearInterval(intervall)

            }
        }, 5);
    }
    

})

booking.addEventListener("click",()=>{
    let say=window.scrollY;
    let interval =setInterval(()=>{
        window.scrollTo(0,say);
        say+=10;
        if(say>=4150){
            clearInterval(interval);
          
        }
        
    },0)
    

})






const nav =document.querySelector("nav")

window.addEventListener("scroll",()=>{
    if(window.scrollY>600){
        nav.setAttribute("style","background:black")
    }else{
 
  nav.setAttribute("style","background:#00000045")
    }
})