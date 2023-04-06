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

downloadButton.addEventListener('click', async () => {
    const target = document.querySelector('#whatsapp')
    const canvas = await html2canvas(target, {
        onclone: doc => {
            const footer = doc.querySelector('#whatsapp footer input')
            footer.style.translate = '0 50%'
        }
    })

    const download = document.createElement('a')
    download.download = 'whatsapp'
    download.href = canvas.toDataURL('png')
    download.click()

    const image = document.createElement('img')
    image.src = canvas.toDataURL('png')

    document.body.appendChild(image)
})

// const printButton = document.querySelector('.printButton')

// printButton.addEventListener('click', async () => {
//     const canvas = await html2canvas(document.querySelector('#whatsapp'));

//     print(canvas)
// })