//***toggle***
//getBoundingClientRect
const links=document.querySelector(".links");
const navToggle=document.querySelector(".nav-toggle");
const linksContainer=document.querySelector(".links-container");

navToggle.addEventListener('click',function(){
    //links.classList.toggle('show-links');
    const containerHeight=linksContainer.getBoundingClientRect().height;
    const linksHeight=links.getBoundingClientRect().height;

    if(containerHeight===0){
        linksContainer.style.height=`${linksHeight}px`;
    }
    else{
        linksContainer.style.height=0;
    }
})

//***set date***
const date=document.getElementById('date')
date.innerHTML=new Date().getFullYear();

//***fixed Navbar ***
//pageYOfffset
const navBar=document.getElementById('nav');
const topLink=document.querySelector('.top-link');
const banner=document.querySelector('.banner');
window.addEventListener('scroll',function(){
    const scrollHeight=window.pageYOffset;
    const navHeight=navBar.getBoundingClientRect().height;
    if(scrollHeight>navHeight){
        navBar.classList.add('fixed-nav');
        topLink.classList.add('show-links')
    }else{
        navBar.classList.remove('fixed-nav'); 
        topLink.classList.remove('show-links')  
    }
    
})