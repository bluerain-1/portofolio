// introduction animation
const bigText = document.querySelector('.first-title');

const newText = bigText.textContent;
const splitText = newText.split("");
bigText.textContent = "";
for(i=0; i< splitText.length; i++){
    bigText.innerHTML += "<span class='text-app'>"+ splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 30);

function onTick(){
    const span = bigText.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
    complete();
    return;
    }
}

function complete(){''
    clearInterval(timer);
    timer = null;
}

// apparition texte


function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for( var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;
        if(revealTop < windowHeight){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


window.addEventListener('scroll',reveal);


const btn = document.querySelector('.btn1');
const heights = document.querySelector('.font2');
const y = heights.getBoundingClientRect().bottom/2.3;
console.log(y);

btn.addEventListener('click',function(){
    window.scrollBy(0,y);
    
})
const arrow = document.querySelector('.arrow1');
const arowHeights = document.querySelector('.font3');

const arrowy = arowHeights.getBoundingClientRect().bottom/2.3;

arrow.addEventListener('click',function(){
    window.scrollBy(0,arrowy);
})
