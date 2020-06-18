const bg=document.getElementById("bg");
const jupiter=document.getElementById("jupiter");
const mountain=document.getElementById("mountain");
const road=document.getElementById("road");
const text=document.getElementById("text");

window.addEventListener('scroll',function(){
    let value=window.scrollY;

    bg.style.top=value*0.5+'px';
    jupiter.style.left=value*1+'px';
    jupiter.style.top=value*0.25+'px';
    road.style.top=value*0.15+'px';
    text.style.top=value*1+'px';


})