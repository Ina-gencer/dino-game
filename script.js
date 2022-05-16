const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');


document.addEventListener("keydown", function(event) {  //подслужка на всю клавиатуру
    jump();
})
document.addEventListener("touchstart", jump); //чтобы срабатывало"прикосновение" на мобильных устройствах

function jump() {
    if(dino.classList != "jump") {
        dino.classList.add("jump");
    }
    setTimeout(function() {
        dino.classList.remove("jump")
    }, 300)
    
}
let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

//     if(cactusLeft < 10 && cactusLeft > 0 && dinoTop >= 130) {
//       alert('GAME OVER!')
//   }
}, 10);
