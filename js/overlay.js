const openBtn = document.querySelector('#openBtn');
const body = document.body;

openBtn.addEventListener('click', e =>{
    const fullScreenMenu = document.createElement('div');
    fullScreenMenu.classList.add('fullscreen-menu');

    const containerElement = document.createElement('nav');
    containerElement.classList.add('menu');

    fullScreenMenu.appendChild(containerElement);
    body.appendChild(fullScreenMenu);
});