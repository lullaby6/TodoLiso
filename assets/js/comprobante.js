const inputComprobanteElement = document.getElementById("file")
const comprobanteElement = document.getElementById("image-c")

inputComprobanteElement.addEventListener("change", e => {
    const file = e.target.files[0]

    const img = document.createElement("img")
    img.classList.add("comprobante")
    img.src = URL.createObjectURL(file)
    comprobanteElement.appendChild(img)

    comprobanteElement.style.display = "flex"
    inputComprobanteElement.style.display = "none"

})