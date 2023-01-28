
const character = document.getElementById('character')
let block = document.getElementById('block')
const alert = document.querySelector(".alert")
const game = document.getElementById('game')
const reload = document.querySelector('.reload')
const score = document.querySelector('.score').value
let scoreVlaue = 0
let bool = false

function jump() {
    if (character.classList != "animate") {
      character.classList.add("animate");
    }
    setTimeout(function () {
      character.classList.remove("animate");
    }, 1000);
}

const interval = setInterval(()=>{
  if (bool == true && checkDead) {
      clearInterval(interval)
  } else {
      let newBloc = document.createElement('div')
      ele.setAttribute('id','block')
      game.removeChild(document.getElementById('block'));
      game.appendChild(newBloc)
  }
},1000)

var checkDead = setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        game.removeChild(block);
        alert.style.display = "block"
        bool = true
      }
      
    return bool
  }, 10);

  

  reload.addEventListener("click", function (){
    window.location.reload()
  })