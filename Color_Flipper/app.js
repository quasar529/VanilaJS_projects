//const colors=["green","red","coral","rgba(142,153,463)","#f15025"];

const btn = document.getElementById('btn');
const color=document.querySelector('.color');
const containerBox=document.querySelector(".container");
btn.addEventListener('click',function(){
    //const randomNumber=getRandomNumber();
    let rgbaColor="rgba("
    for(let i=0;i<3;i++){
        rgbaColor+=getRandomNumber();
        rgbaColor+=',';
    }
    rgbaColor+=Math.random().toFixed(1);
    //ctnColor=rgbaColor+(Math.random()-0.5)+')';
    rgbaColor+=')';
    //document.body.style.backgroundColor=colors[randomNumber];
    //color.textContent=colors[randomNumber];
    document.body.style.backgroundColor=rgbaColor;
    color.textContent=rgbaColor;
   // containerBox.style.backgroundColor=ctnColor;
    //console.log(ctnColor);
})
function getRandomNumber(){
    return Math.floor(Math.random()*255);
}
