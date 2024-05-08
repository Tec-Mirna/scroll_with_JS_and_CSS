// seleccionar elementos que tienen la clase section y almacena en lista
const sections = document.querySelectorAll('.section')

//Iterar sobre cada elemnto 'section'
sections.forEach(section => {
  //  event listener para el evento de clic en cada section
  section.addEventListener('click', () => {
        removeActiveClasses() //Eliminar la clase active de todos antes de mostrar la del seleccionado
        section.classList.add('active') //Añadir clase active al que se le haya hecho clic
    })
})

// FUNCIÓN PARA ELIMINAR CLASE ACTIVE
function removeActiveClasses() {
    sections.forEach(section => { 
        section.classList.remove('active') // se remueve la clase active 
    })
}