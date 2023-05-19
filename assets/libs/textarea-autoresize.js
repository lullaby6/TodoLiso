const autoResizeTextAreaElements = document.querySelectorAll('textarea[auto-resize]')

autoResizeTextAreaElements.forEach(textAreaElement => {
    textAreaElement.addEventListener('input', () => {
        textAreaElement.rows = textAreaElement.value.split('\n').length
    })
})