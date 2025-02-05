const box = document.getElementById('box');
const widthSlider = document.getElementById('width');
const heightSlider = document.getElementById('height');
const rotateSlider = document.getElementById('rotate');

const widthValue = document.getElementById('widthValue');
const heightValue = document.getElementById('heightValue');
const rotateValue = document.getElementById('rotateValue');

function bindInputHandlers(slider, valueInput, styleProperty, unit = '') {
    slider.addEventListener('input', () => {
        box.style[styleProperty] = slider.value + unit;
        valueInput.value = slider.value;
    });

    valueInput.addEventListener('input', () => {
        box.style[styleProperty] = valueInput.value + unit;
        slider.value = valueInput.value;
    });
}

// Виклик функції для ширини, висоти та обертання
bindInputHandlers(widthSlider, widthValue, 'width', 'px');
bindInputHandlers(heightSlider, heightValue, 'height', 'px');
bindInputHandlers(rotateSlider, rotateValue, 'transform', 'deg');
