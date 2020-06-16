const modalBtn=document.querySelector(".modal-btn");
const closeBtn=document.querySelector(".close-btn");
const modalOverlay=document.querySelector(".modal-overlay");
const modalContent=document.querySelector(".modal-content");
modalBtn.addEventListener("click",function(){
    modalOverlay.classList.add("open-modal");
    modalContent.innerHTML="Who is main character in your life?"
})
closeBtn.addEventListener("click",function(){
    modalOverlay.classList.remove("open-modal");
})