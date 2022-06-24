const slide_container = document.querySelector('.slides');
const slides = slide_container.querySelectorAll('.img')
const btnleft = document.querySelector('.wrapper .btns .left')
const btnright = document.querySelector('.wrapper .btns .right')

let slide_index = 1 //if it is incremented the page will move
let size = slides[0].clientWidth

slide_container.style.transform = 'translateX('+(-size*slide_index)+'px)';

//event listeners

btnleft.addEventListener('click', ()=>{
    slide_container.style.transition = 'all .5s ease-in-out';
    slide_index-=1
    slide_container.style.transform = 'translateX('+(-size*slide_index)+'px)';
    console.log(slide_index)
   
})
btnright.addEventListener('click', ()=>{
    slide_container.style.transition = 'all .5s ease-in-out';
    slide_index+=1
    slide_container.style.transform = 'translateX('+(-size*slide_index)+'px)';
    console.log(slide_index)
})

slide_container.addEventListener('transitionend', ()=>{
    console.log(slide_index)
    console.log('hello')
    if(slide_index>2){
        slide_index=-3
    }
    else if(slide_index<-2){
        slide_index=3
    }

})



