let h3 = document.querySelectorAll(".nav-part1 h3")

h3.forEach(function(item){

    item.addEventListener("mouseenter",function(){
        item.style.border = '2px solid transparent'
        item.style.backgroundColor  = 'rgb(208, 208, 208)'
        item.style.cursor = 'pointer'
    })
    
    
    item.addEventListener("mouseleave",function(){
        item.style.border = '2px solid transparent'
        item.style.backgroundColor  = 'transparent'

    })
})


let button = document.querySelector(".nav-part2 button")
button.addEventListener("mouseenter",function(){
    button.style.color = 'black'
    button.style.backgroundColor = 'white'
    button.style.border = '2px solid black'
    button.style.cursor = 'pointer'
    button.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px';

})

button.addEventListener("mouseleave",function(){
    button.style.color = 'white'
    button.style.backgroundColor = '#139d6d'
    button.style.border = '2px solid transparent'
    button.style.cursor = 'none'
    button.style.boxShadow = 'none';

})

let count = 0
button.addEventListener("click",function(){
    if (count == 0) {
        button.innerHTML = 'Log In'
    alert("log In")

    count ++
    } else {
        button.innerHTML = 'Sign In'
        count --
    }
})


let btn = document.querySelector(".mainleft button")

btn.addEventListener("mouseenter",function(){
    btn.style.color = 'black'
    btn.style.backgroundColor = 'white'
    btn.style.border = '2px solid black'
    btn.style.cursor = 'pointer'
    btn.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px';
})

btn.addEventListener("mouseleave",function(){
    btn.style.color = 'white'
    btn.style.backgroundColor = '#139d6d'
    btn.style.border = '2px solid transparent'
    btn.style.cursor = 'none'
    btn.style.boxShadow = 'none';

})

let images = document.querySelectorAll(".mainright img")

console.log(images);
images.forEach(function(item){

    item.addEventListener("mouseenter",function(){
        item.style.scale = 1.1
        item.style.cursor = 'pointer'
    })

    item.addEventListener("mouseleave",function(){
        item.style.scale = 1
        item.style.cursor = 'none'

    })
})


let head  = document.querySelectorAll(".mainleft h1")

head.forEach(function(item){

    item.addEventListener("mouseenter",function(){
      
     item.style.WebkitTextStroke = '2px #139d6d'
     item.style.color = "transparent"
    })
    
    
    item.addEventListener("mouseleave",function(){
       
      
        item.style.WebkitTextStroke = '2px transparent';
        item.style.color = "black"
    
    })
})

let para  = document.querySelector(".mainleft h3")
console.log(para);
para.addEventListener("mouseenter",function(){
    para.style.color = '#139d6d'
})

para.addEventListener("mouseleave",function(){
    para.style.color = 'black'
})



// page2 

let h1 = document.querySelector(".heading h1")

let heading = document.querySelector(".heading")

heading.addEventListener("mouseenter",function(){
    h1.style.color = 'black'
})

heading.addEventListener("mouseleave",function(){
    h1.style.color = '#139d6d'
})


h1.addEventListener("mouseenter",function(){
    h1.style.WebkitTextStroke = '2px black'
    h1.style.color  = "transparent"
})

h1.addEventListener("mouseleave",function(){
    h1.style.WebkitTextStroke = '2px transparent'
    h1.style.color  = "black"
})

//+++++++++++++++++++++++++++++++++++++++++++

let card = document.querySelectorAll(".card")
console.log(card);

let btn3 = document.querySelectorAll(".card button")
console.log(btn3);


let img = document.querySelectorAll(".card .img-div")


card.forEach(function(elem){

  elem.addEventListener("mouseenter",function(){
    elem.style.scale = 1.1
  /* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
    elem.style.boxShadow = "rgb(38, 57, 77) 0px 20px 30px -10px"
    elem.style.cursor = 'pointer'
  })

  elem.addEventListener("mouseleave",function(){
    elem.style.scale = 1
    elem.style.boxShadow = "none"
    elem.style.cursor = 'none'

  })

})


btn3.forEach(function(elem){

    elem.addEventListener("mouseenter",function(){
        elem.style.color = 'black'
        elem.style.backgroundColor = 'white'
        elem.style.border = '2px solid black'
        elem.style.cursor = 'pointer'
        elem.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px';
    })
    
    elem.addEventListener("mouseleave",function(){
        elem.style.color = 'white'
        elem.style.backgroundColor = '#139d6d'
        elem.style.border = '2px solid transparent'
        elem.style.cursor = 'none'
        elem.style.boxShadow = 'none'
    })

})

let flag = 0
btn3.forEach(function(item){

    item.addEventListener("click",function(){
        if (flag == 0) {
            item.innerHTML = "Cancel order"
            flag ++
        } else {
            
            item.innerHTML = "Add to Kart"
            flag --

        }
    })
})


let main = document.querySelector(".page1")
let crsr = document.querySelector(".cursor")


main.addEventListener("mousemove",function(dets){
// console.log(dets.x);
crsr.style.left = dets.x+"px"
crsr.style.top = dets.y+"px"

})

// Animation 

let tl = gsap.timeline()
tl .from(".nav-part1 h3",{
    y:-80,
    opacity:0,
    duration:0.8,
    stagger:0.3,
})

tl.from(".mainleft h1",{
    x:-100,
    opacity:0,
    stagger:1,
    duration:0.3

})

tl.from(".mainleft h3",{
    x:100,
    opacity:0,
    stagger:1,
    duration:0.4

})

tl.from(".mainleft button",{
    y:-100,
    opacity:0,
    stagger:1,
    duration:0.4

})

// Scrolltrigger next page

gsap .from(".page2 .heading",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:".page2 .heading",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        // markers:"transparent"

    }
})





