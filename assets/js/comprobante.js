const inputComprobanteElement = document.getElementById("file")
const comprobanteElement = document.getElementById("image-c")

inputComprobanteElement.addEventListener("change", async e => {
    const file = e.target.files[0]
	
	if (file.type === 'application/pdf') {
		const reader = new FileReader();

		reader.onload = async function() {
			const typedarray = new Uint8Array(this.result);

			try {
				const pdf = await pdfjsLib.getDocument(typedarray).promise;
				const page = await pdf.getPage(1);

				const scale = 1.5;
				const viewport = page.getViewport({ scale: scale });

				const canvas = document.createElement('canvas');
				const context = canvas.getContext('2d');
				canvas.height = viewport.height;
				canvas.width = viewport.width;

				await page.render({ canvasContext: context, viewport: viewport }).promise;

				const imageData = canvas.toDataURL('image/jpeg');
			
				const img = document.createElement('img');
				img.classList.add("comprobante")
				img.src = imageData;
				comprobanteElement.appendChild(img)	
			} catch (error) {
				console.log('Error al cargar el archivo PDF:', error);
			}
		};

		reader.readAsArrayBuffer(file);
	}else{
		const img = document.createElement("img")
		img.classList.add("comprobante")
		img.src = URL.createObjectURL(file)
		comprobanteElement.appendChild(img)
	}

    comprobanteElement.style.display = "flex"
    inputComprobanteElement.style.display = "none"

})