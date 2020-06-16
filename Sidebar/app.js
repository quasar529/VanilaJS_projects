const sidebar=document.querySelector(".sidebar");
const toggleBtn=document.querySelector('.sidebar-toggle');
const closeBtn=document.querySelector(".close-btn");

toggleBtn.addEventListener('click',function(){
    sidebar.classList.toggle("show-sidebar");
})
closeBtn.addEventListener('click',function(){
    sidebar.classList.remove("show-sidebar");
})