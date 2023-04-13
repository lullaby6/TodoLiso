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

    const canvas = await html2canvas(target)

    const download = document.createElement('a')
    download.download = 'precio'
    download.href = canvas.toDataURL('png')
    download.click()

    // try {
    //     const stream = await navigator.mediaDevices.getDisplayMedia({preferCurrentTab: true})
    //     const video = document.createElement('video')
    //     video.addEventListener('loadedmetadata', () => {
    //         const canvas = document.createElement('canvas')
    //         const ctx = canvas.getContext('2d')

    //         canvas.width = video.videoWidth
    //         canvas.height = video.videoHeight

    //         video.play()

    //         ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    //         const download = document.createElement('a')
    //         download.download = 'whatsapp'
    //         download.href = canvas.toDataURL('png')
    //         download.click()
    //     })
    //     video.srcObject = stream;
    //     console.log(stream)
    // }catch (error){
    //     console.log(error)
    // }
})