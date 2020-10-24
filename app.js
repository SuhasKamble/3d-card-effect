const card = document.querySelector(".card")
const container = document.querySelector('.container')
// items
const title = document.querySelector(".title")
const sneaker = document.querySelector(".sneaker img")
const purchase = document.querySelector(".purchase")
const desc = document.querySelector(".desc")
const sizes = document.querySelector('.sizes')
// moving aniamtion 

container.addEventListener('mousemove',(e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX)/20
    let yAxis = (window.innerHeight / 2 - e.pageY)/20
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

    
})
// Animate In
container.addEventListener('mouseenter',(e)=>{
    card.style.transition = "none"
    // poput
    title.style.transform=`translateZ(100px)`
    sneaker.style.transform=`translateZ(100px) rotateZ(-25deg)`
    purchase.style.transform=`translateZ(100px)`
    desc.style.transform=`translateZ(100px)`
    sizes.style.transform=`translateZ(100px)`
   
})
// Amimate Out
container.addEventListener('mouseleave',(e)=>{
    card.style.transition = "all 0.5s ease"

    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform=`translateZ(00px)`
    sneaker.style.transform=`translateZ(0px) rotateZ(0deg)`
    purchase.style.transform=`translateZ(00px)`
    desc.style.transform=`translateZ(0px)`
    sizes.style.transform=`translateZ(0px)`
})