let whatsappQR = new QRCode(document.getElementById("qrcode"), {
    text: "https://wa.me/5491131472721",
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

const whatsappNumberElement = document.getElementById("whatsapp-number")

whatsappNumberElement.addEventListener('input', e => {
    const number = e.target.value.replaceAll(' ', '').replaceAll('-', '').replaceAll('+', '')
    const waMe = `https://wa.me/549${number}`

    whatsappQR.makeCode(waMe);
})

const downloadButton = document.querySelector('.downloadButton')

downloadButton.addEventListener('click', async () => {
    const canvas = await html2canvas(document.querySelector('#whatsapp'));

    const download = document.createElement('a')
    download.download = 'whatsapp'
    download.href = canvas.toDataURL('png')
    download.click()
})

const printButton = document.querySelector('.printButton')

printButton.addEventListener('click', async () => {
    const canvas2 = await html2canvas(document.querySelector('#whatsapp'));

    const image = document.createElement('img')
    image.src = canvas2.toDataURL('png')

    print(image)
})