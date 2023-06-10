window.HTMLComponentRender = container => {
    container.querySelectorAll('html-component').forEach(async HTMLComponent => {
        if(HTMLComponent.hasAttribute('rendered')) return

        const res = await fetch(HTMLComponent.getAttribute('src'));
        let text = await res.text();

        HTMLComponent.setAttribute('children', HTMLComponent.innerHTML);

        const propsRegex = /\{(\w+)\}/g;
        HTMLComponent.innerHTML = text.replace(propsRegex, (match, att) =>
        HTMLComponent.getAttribute(att) || ''
        )

        HTMLComponent.querySelectorAll('script').forEach(scriptElement => {
            const newScriptElement = document.createElement('script');
            newScriptElement.innerHTML = scriptElement.innerHTML
            document.getElementsByTagName('head')[0].appendChild(newScriptElement)
            scriptElement.remove()
        })

        HTMLComponent.setAttribute('rendered', '')

        HTMLComponentRender(HTMLComponent)
    })

    container.querySelectorAll('[listener]').forEach(async listenerElement =>
        listenerElement.getAttribute('listener').split(' ').forEach(listener => {
            const [eventName, methodName] = listener.split('-')
            if(eventName == 'load') {
                listenerMethods[methodName](listenerElement.dispatchEvent(new Event('load')))
            }else{
                listenerElement.addEventListener(eventName, event => listenerMethods[methodName](event))
            }
        })
    )
}

window.listenerMethods = {}
window.HTMLComponentRender(document)