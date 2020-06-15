const reviews=[
    {
        id:1,
        name:"Dwyane Wade",
        job:"Shooting Guard",
        img:"images/DWADE.png",
        text:" DW is one of the greatest SG in the NBA history. He is Miami Heat francise superstar and he leads 3 time champion."
    },
    {
        id:2,
        name:"Allen Iverson",
        job:"Shooting Guard",
        img:"images/AI.png",
        text:" AI is one of the best scorer in the NBA history. In 2001, 76ers, he leaded, was one and only team which beat Shaq's Lakers in the PlayOff."
    },
    {
        id:3,
        name:"Lebron James",
        job:"Small Forward",
        img:"images/LBJ.png",
        text:" LBJ is the best SF of the all time. He wins 3 champion and he is incredible all-around player."
    },
    {
        id:4,
        name:"Damian Lillard",
        job:"Point Guard",
        img:"images/DL.png",
        text:" DL is Blazers francise PG. He is 5-time All-Star and he won ROTY over AD and All-NBA First Team in 2018."
    }
    
]
//select item
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const randomBtn=document.querySelector(".random-btn");

let currentItem=0;

//load item
window.addEventListener('DOMContentLoaded',function(){
    showPerson();
})

function showPerson(){
    const item=reviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

//show next
nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
})
//
prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    showPerson();
})
//
randomBtn.addEventListener('click',function(){
    currentItem=Math.floor(Math.random()*reviews.length);
    showPerson();
})