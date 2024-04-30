const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

//Creacion de las cajas
function createBoxes() {
  for (let i = 0; i < 4; i++) { //filas
    for (let j = 0; j < 4; j++) { // columnas
      const box = document.createElement('div') //creo elemento (caja)
      box.classList.add('box') //Agrego la clase box
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px` //Posicion 
      boxesContainer.appendChild(box) //agregar la caja al cont.
    }
  }
}

createBoxes() //Llamado a la función para crear las cajas