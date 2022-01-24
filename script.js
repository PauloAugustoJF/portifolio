const texto = document.querySelector("h1")
const header = document.querySelector("nav")
let y = 0

function move(event){
  y = event.clientY
  const distY = 70
  if(y < distY){
    header.classList.remove("move")
  }else if (y > distY && window.scrollY > 0){
    header.classList.add("move")
  }
}

function scroll(event){
  if (window.scrollY > 0){
    texto.classList.add("move")
    header.classList.add("move")
  } else {
    texto.classList.remove("move")
    header.classList.remove("move")
  }
  
}

document.addEventListener("mousemove",move)
document.addEventListener("scroll",scroll)