const colorPicker = document.querySelector('#colorpicker')


















const changeColor = () => {
    document.documentElement.style.setProperty("--first-color", colorPicker.value);
}

document.addEventListener('click', changeColor)