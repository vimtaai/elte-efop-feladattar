const summary = document.querySelector('.summary');
const text = document.querySelector('.text');

summary.addEventListener('click', ()=>{
    text.classList.toggle('text');
})