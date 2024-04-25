//Seleccionar todos los elementos que posean la clase box
const boxes = document.querySelectorAll('.box')

//Al hacer scroll se ejecuta la función checkBoxes
window.addEventListener('scroll', checkBoxes) 

checkBoxes() //Llamada a la función

function checkBoxes() {
    // Divide la altura de la ventana del navegador por 5  y multiplica el resultado de la división por 4 
    //esto significa que estamos tomando el 80% de la altura de la ventana del navegador, esto determina cuando volver visible un elemento
    const triggerBottom = window.innerHeight / 5 * 4 

    boxes.forEach(box => { //Itera sobre cada elemento con la clase box
        const boxTop = box.getBoundingClientRect().top  //getBoundingClientRect()método de JavaScript que se utiliza para obtener la posición de un elemento en relación con la ventana del navegador.

        //Si la posición superior del elemento es menor que triggerBottom se muestra el elemento
        if(boxTop < triggerBottom) {
            box.classList.add('show') //SE agrega el elemento
        } else {
            box.classList.remove('show') // se retira el elemnto
        }
    })
}