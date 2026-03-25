let boxs= document.querySelector(".box")
let red = document.querySelector("#red")
let green = document.querySelector("#green")
let blue = document.querySelector("#blue")
let pink= document.querySelector("#pink")
let input = document.querySelector("input")
let h1 = document.querySelector("h1")
let button =document.querySelector("button")
red.addEventListener("click",()=>{
    red.style.backgroundColor = "red"
  
})
green.addEventListener("click",()=>{
   
    green.style.backgroundColor = "green"
 
})
blue.addEventListener("click",()=>{
    
    blue.style.backgroundColor = "blue"
  
})
pink.addEventListener("click",()=>{
   
    pink.style.backgroundColor = "pink"
})
input.addEventListener("change",(ev)=>{
  h1.innerText = `Hello, ${ev.target.value}`
  h1.style.display = "none"
  
})

 button.addEventListener("click",(val)=>{
      h1.style.display = "block"

    
 })

