const precioElement = document.querySelector('.print')

window.addEventListener('mousewheel', event => {
    if (event.deltaY < 0){
        precioElement.style.scale = `${parseFloat(getComputedStyle(precioElement).getPropertyValue('scale')) + 0.1}`
    }
    else if (event.deltaY > 0){
        precioElement.style.scale = `${parseFloat(getComputedStyle(precioElement).getPropertyValue('scale')) - 0.1}`
    }
})