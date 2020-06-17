//selectors
const questions=document.querySelectorAll('.question');

questions.forEach(function(Q){
    const btn=Q.querySelector('.question-btn');
    btn.addEventListener('click',function(){

        questions.forEach(function(item){
            if(item!==Q){
                item.classList.remove('show-text');
            }
        });

        Q.classList.toggle('show-text');
    });
})

//traversing the DOM
// const btns=document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(event){
//         const question=event.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     })
// })