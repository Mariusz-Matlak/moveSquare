const div = document.querySelector('div');
let divX = 200;
let divY = 50;
div.style.left = `${divX}`;
div.style.right = `${divY}`;

let dravActive = false;
let insertDivX;
let insertDivY;

div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = 'green';
    drawActive = !dravActive;
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
})

div.addEventListener('mouseup', () => {
    div.style.backgroundColor = 'black';
    drawActive = !dravActive;
})

div.addEventListener('mousemove', (e) => {
    if (drawActive) {
        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
})