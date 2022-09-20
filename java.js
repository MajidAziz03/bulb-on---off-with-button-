const btnOn = document.querySelector('#on')
const img = document.querySelector('#image')
const h1 = document.querySelector('h1')
btnOn.addEventListener('click', ()=>{
img.src = "/on.jpg"
h1.innerText = " Turned On ...!"
h1.style.color = " yellow";

 
})


const btnOff = document.querySelector('#off')
const img1 = document.querySelector('#image')

btnOff.addEventListener('click', ()=>{
document.querySelector('#image').src = "/off dada.jpg"
h1.innerText = " Turned Off"
setTimeout(()=>{
h1.innerText = " lets turn on the bulb  "
},1000)
h1.style.color = " red";
})


