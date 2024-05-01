const sliderContainer = document.querySelector('.slider-container') //contenedor
const slideRight = document.querySelector('.right-slide') //cont. del lado derecho
const slideLeft = document.querySelector('.left-slide') // izquierda
const upButton = document.querySelector('.up-button') // botón que lleva hacia arriba
const downButton = document.querySelector('.down-button') // botón que lleva hacia abajo
const slidesLength = slideRight.querySelectorAll('div').length //Cantidad de desplazamientos

let activeSlideIndex = 0 //indice del slide

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

//Botones de desplazamiento
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

// Está función toma el argumento (direccion) el cual indica hacia donde debe desplzarse
const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {  // Si se  desplaza hacia arriba, incrementa el índice del slide activo
        activeSlideIndex++

         // Si el índice del slide activo es mayor que el número total de slides, vuelve al primer slide
         // del último vuelve al primero
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }

    // Si se está desplazando hacia abajo, decrementa el índice del slide activo
    } else if(direction === 'down') {
        activeSlideIndex--

         // Si el índice del slide activo es menor que 0, vuelve al último slide
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    // Actualiza las transformaciones CSS para mostrar
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}