const box = document.getElementById('box');
const widthSlider = document.getElementById('width');
const heightSlider = document.getElementById('height');
const rotateSlider = document.getElementById('rotate');

const widthValue = document.getElementById('widthValue');
const heightValue = document.getElementById('heightValue');
const rotateValue = document.getElementById('rotateValue');

widthSlider.addEventListener('input', () => {
    box.style.width = widthSlider.value + 'px';
    widthValue.value = widthSlider.value;
});

widthValue.addEventListener('input', () => {
    box.style.width = widthValue.value + 'px';
    widthSlider.value = widthValue.value;
});

heightSlider.addEventListener('input', () => {
    box.style.height = heightSlider.value + 'px';
    heightValue.value = heightSlider.value;
});

heightValue.addEventListener('input', () => {
    box.style.height = heightValue.value + 'px';
    heightSlider.value = heightValue.value;
});

rotateSlider.addEventListener('input', () => {
    box.style.transform = `rotate(${rotateSlider.value}deg)`;
    rotateValue.value = rotateSlider.value;
});

rotateValue.addEventListener('input', () => {
    box.style.transform = `rotate(${rotateValue.value}deg)`;
    rotateSlider.value = rotateValue.value;
});