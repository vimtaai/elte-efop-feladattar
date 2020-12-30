const details = document.querySelectorAll('.details');

for(const detail of details){
    detail.addEventListener('click', ()=>{
        const text = detail.querySelector('.text');
        if(text.style.display != 'block'){
            text.style.display = 'block';
        }else{
            text.style.display = 'none';
        }
    })
}