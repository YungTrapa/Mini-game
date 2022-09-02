const board = document.querySelector('#board'),
    SQUARE_NUMBER = 3000;

    
const colors = ['palegoldenrod','cadetblue','aqua','brown','springgreen','tomato',
'crimson','deeppink'];


for (let i = 0; i < SQUARE_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => 
    setColor(square));

    square.addEventListener('mouseleave', () => 
    removeColor(square));

    board.append(square);
}



function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px`;

}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}





