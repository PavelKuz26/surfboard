const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');
const overlayElement = document.querySelector('.fullscreen-menu');

openBtn.addEventListener('click', function(){
    overlayElement.classList.add('fullscreen__active')
});

closeBtn.addEventListener('click', function(){
    overlayElement.classList.remove('fullscreen__active')
});