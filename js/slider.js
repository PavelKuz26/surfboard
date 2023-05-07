// const slider = document.querySelector('.slider');
// const buttons = document.querySelectorAll('.slider__btns');
// const items = document.querySelectorAll('.slider__item');

// const sliderTranform = (to) => {

//     const width = document.querySelector('.slider__item').offsetWidth
//     const currentPosition = +slider.style.left.replace('-', '').replace('px', '')

//     let i = 0;

//     if (to === 'right') {
//         if (currentPosition === 0 ) {
//             i = 1
//         } else if (currentPosition > 0 && currentPosition < width * (items.length - 1)) {
//             i = currentPosition / width + 1
//         }
//     } else {
//         if (currentPosition === 0 ) {
//             i = (items.length - 1)
//         } else if (currentPosition > 0) {
//             i = currentPosition / width - 1
//         }
//     }

    
//     slider.style.left = `-${width * i}px`
// }


// for (let index = 0; index < buttons.length; index++) {
//     const button = buttons[index];
//     button.addEventListener('click', (e) => {
//         e.preventDefault()
//         if (button.classList.contains('slider__btn--left')) {
//             sliderTranform('left')
//         } else {
//             sliderTranform('right')
//         }
        
//     })
    
// }

const slider =  $(".slider").bxSlider({
    pager: false,
    controls: false
});

$('.slider__btn--left').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
})
$('.slider__btn--right').click(e =>{
    e.preventDefault();
    slider.goToNextSlide();
});