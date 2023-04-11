
const tituloInputElement = document.querySelector('#precio #precios-c #titulo');

tituloInputElement.addEventListener('input', element => {
    tituloInputElement.rows = tituloInputElement.value.split('\n').length
})

const downloadButton = document.querySelector('.downloadButton')

downloadButton.addEventListener('click', () => {
    const target = document.querySelector('#precio')

    const style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet?.insertRule('body > div:last-child img { display: inline-block; }');

    html2canvas(target).then(canvas => {
        style.remove()

        const download = document.createElement('a')
        download.download = 'precio'
        download.href = canvas.toDataURL('png')
        download.click()

        const image = document.createElement('img')
        image.src = canvas.toDataURL('png')
    })
})

const printButton = document.querySelector('.printButton')

printButton.addEventListener('click', () => {
    const target = document.querySelector('#precio')

    const style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet?.insertRule('body > div:last-child img { display: inline-block; }');

    html2canvas(target).then(canvas => {
        style.remove()

        const image = document.createElement('img')
        image.src = canvas.toDataURL('png')
        print(image)
    })
})