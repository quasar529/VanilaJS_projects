const weekdays=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months=[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
const deadline=document.querySelector(".deadline");
const coming=document.querySelector(".coming");
const items=document.querySelectorAll(".deadline-format h4");


//
let tempDate=new Date();
let tempYear=tempDate.getFullYear();
let tempMonth=tempDate.getMonth();
let tempDay=tempDate.getDate();
let after10Day=new Date(tempYear,tempMonth,tempDay+10,12,00,0);

let futureDate=new Date(2020,7,12,9,0,0);   //month-> 0 index


const year=futureDate.getFullYear();
const hours=futureDate.getHours();
const mins=futureDate.getMinutes();
const secs=futureDate.getSeconds();

const month=months[futureDate.getMonth()];
const day=futureDate.getDate();
const weekday=weekdays[futureDate.getDay()];

coming.textContent=`The Movie Comes out on ${weekday} ${month} ${year} ${hours} : ${mins}am`;

const futureTime=futureDate.getTime();
function getRemainingTime(){
    const today=new Date().getTime();
    const temp=futureTime-today;
    
    const oneDay=24*60*60*1000;
    const oneHour=60*60*1000;
    const oneMinute=60*1000;

    let days=Math.floor(temp/oneDay);
    let hours=Math.floor((temp%days)/oneHour);
    let minutes=Math.floor((temp%oneHour)/oneMinute);
    let seconds=Math.floor((temp%oneMinute)/1000);
    
    console.log(days,hours,minutes);

    const values=[days,hours,minutes,seconds];

    function format(item){
        if(item<10){
            return item=`0${item}`;
        }else{
            return item;
        }
    }

    items.forEach(function(item,index){
        item.innerHTML=format(values[index]);
    });
    if(temp<0){
        clearInterval(countdown);
        deadline.innerHTML=`<h4 class="expired">This has expired.</h4>`
    }
}

let countdown=setInterval(getRemainingTime,1000);