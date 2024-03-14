const player = document.querySelector("#player");
const tree = document.querySelector("#tree");

let score = 0;
let isDead = false;


function jump()
{
    if(!player.classList.contains('jump'))
    {
        player.classList.add('jump');

        setTimeout(function(){
            player.classList.remove('jump');
        }, 300);
    }
}

let isAlive = setInterval(function(){
    let playerPosition = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    let treePosition = parseInt(window.getComputedStyle(tree).getPropertyValue('left'));

    const playerWidth = parseInt(window.getComputedStyle(player).getPropertyValue('width'));


    if(treePosition < playerWidth && playerPosition >= 141){
        isDead = true;
        alert(`Vous êtes mort :( 
            votre score est de ${score}`);
        window.location.reload();
    }
}, 10)

setInterval(function(){
    if(!isDead){
        score++;
        document.getElementById('score').innerText = score;    }
},100)

document.addEventListener('keydown', function(e){
    if(e.key == "Enter"){
        jump();
    }
})

