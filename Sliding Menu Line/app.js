const marker = document.querySelector("#marker");
const item=document.querySelectorAll("nav a");

function indicator(e){
    marker.style.left=e.offsetLeft+"px";
    marker.style.width=e.offsetWidth+"px";
}
item.forEach(a=>{
    a.addEventListener('mouseover',e=>{
        indicator(e.target);
    })
})