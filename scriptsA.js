const image = document.getElementById('image');

const arcaea = document.getElementById('arcaea');
const genshin = document.getElementById('genshin');
const osu = document.getElementById('osu');
const cs = document.getElementById('cs');
const mc = document.getElementById('mc');
const l4d2 = document.getElementById('l4d2');
const hl = document.getElementById('hl');

arcaea.addEventListener('mouseover', () => {
    image.src = 'images/games/arcaea.png';
});
genshin.addEventListener('mouseover', () => {
    image.src = 'images/games/genshin.png';
});
osu.addEventListener('mouseover', () => {
    image.src = 'images/games/osu.png';
});
cs.addEventListener('mouseover', () => {
    image.src = 'images/games/cs.png';
});
mc.addEventListener('mouseover', () => {
    image.src = 'images/games/mc.png';
});
l4d2.addEventListener('mouseover', () => {
    image.src = 'images/games/l4d2.png';
});
hl.addEventListener('mouseover', () => {
    image.src = 'images/games/hl.png';
});

arcaea.addEventListener('mouseout', () => {
    image.src = 'images/pview1.png';
});
genshin.addEventListener('mouseout', () => {
    image.src = 'images/pview1.png';
});
osu.addEventListener('mouseout', () => {
    image.src = 'images/pview1.png';
});
cs.addEventListener('mouseout', () => {
    image.src = 'images/pview1.png';
});
mc.addEventListener('mouseout', () => {
    image.src = 'images/pview1.png';
});
l4d2.addEventListener('mouseout', () => {
    image.src = 'images/pview1.png';
});
hl.addEventListener('mouseout', () => {
    image.src = 'images/pview1.png';
});