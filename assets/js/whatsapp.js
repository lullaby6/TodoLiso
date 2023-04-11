const whatsappNumberElement = document.getElementById("whatsapp-number")

let whatsappQR = new QRCode(document.getElementById("qrcode"), {
    text: `https://wa.me/549${whatsappNumberElement.value.replaceAll(' ', '').replaceAll('-', '').replaceAll('+', '')}`,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

whatsappNumberElement.addEventListener('input', e => {
    const number = e.target.value.replaceAll(' ', '').replaceAll('-', '').replaceAll('+', '')
    const waMe = `https://wa.me/549${number}`

    whatsappQR.makeCode(waMe);
})

const downloadButton = document.querySelector('.downloadButton')

downloadButton.addEventListener('click', () => {
    const target = document.querySelector('#whatsapp')

    const style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet?.insertRule('body > div:last-child img { display: inline-block; }');

    html2canvas(target).then(canvas => {
        style.remove()

        const download = document.createElement('a')
        download.download = 'whatsapp'
        download.href = canvas.toDataURL('png')
        download.click()

        const image = document.createElement('img')
        image.src = canvas.toDataURL('png')
    })
})