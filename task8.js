const image = document.getElementById('image');
const button = document.getElementById('Button');

let isEnlarged = false;

button.addEventListener('click', () => {
    if (isEnlarged) {
        image.style.width = '300px';
        image.style.height = '200px';
    } else {
        image.style.width = (parseInt(image.style.width) * 2) + 'px';
        image.style.height = (parseInt(image.style.height) * 2) + 'px';
    }

    isEnlarged = !isEnlarged;
});