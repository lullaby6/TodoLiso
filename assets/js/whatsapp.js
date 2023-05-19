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