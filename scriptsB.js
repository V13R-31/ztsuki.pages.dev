const image = document.getElementById('image');

const rezero = document.getElementById('rezero');
const frieren = document.getElementById('frieren');
const bocchi = document.getElementById('bocchi');
const hyouka = document.getElementById('hyouka');
const oshi = document.getElementById('oshi');

rezero.addEventListener('mouseover', () => {
    image.src = 'images/anime/rezero.png';
});
frieren.addEventListener('mouseover', () => {
    image.src = 'images/anime/frieren.png';
});
bocchi.addEventListener('mouseover', () => {
    image.src = 'images/anime/bocchi.png';
});
hyouka.addEventListener('mouseover', () => {
    image.src = 'images/anime/hyouka.png';
});
oshi.addEventListener('mouseover', () => {
    image.src = 'images/anime/oshi.png';
});

rezero.addEventListener('mouseout', () => {
    image.src = 'images/pview3.png';
});
frieren.addEventListener('mouseout', () => {
    image.src = 'images/pview3.png';
});
bocchi.addEventListener('mouseout', () => {
    image.src = 'images/pview3.png';
});
hyouka.addEventListener('mouseout', () => {
    image.src = 'images/pview3.png';
});
oshi.addEventListener('mouseout', () => {
    image.src = 'images/pview3.png';
});