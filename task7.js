const box = document.getElementById('box');
const parameters = {
    width: { slider: widthSlider, valueInput: widthValue, style: 'width', unit: 'px' },
    height: { slider: heightSlider, valueInput: heightValue, style: 'height', unit: 'px' },
    rotate: { slider: rotateSlider, valueInput: rotateValue, style: 'transform', unit: 'deg' }
};

controls.forEach(control => {
    const slider = document.getElementById(control.slider);
    const valueInput = document.getElementById(control.value);
    bindInputHandlers(slider, valueInput, control.style, control.unit);
});


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

Object.keys(parameters).forEach(key => {
    const param = parameters[key];
    bindInputHandlers(param.slider, param.valueInput, param.style, param.unit);
});
