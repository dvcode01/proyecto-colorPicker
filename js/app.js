// variables y selectores a utilizar
const color = document.querySelector('#color');
const salidaColor = document.querySelector('.salida');
const btn = document.querySelector('.btn');

const storage = localStorage.getItem('colorValue') || '#000000'; 
color.value = storage;


// eventos
eventListeners();
setColor();


function eventListeners(){
    btn.addEventListener('click', setColor);
}

// Esta funcion hace la magia
function setColor(){
    const value = color.value;
    salidaColor.textContent = value;
    salidaColor.style.backgroundColor = value;    

    saveColor(value);
}

function saveColor(value){
    localStorage.setItem('colorValue', value);
}