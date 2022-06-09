
class CustomPanel extends HTMLDivElement {

    constructor() {
        super()
        this.addEventListener('click', () => { this.fetchCustomResult() })
        window.addEventListener('load', () => this.fetchCustomResult() );

        this.shadow = this.attachShadow({mode: 'open'})
    }

    static get observedAttributes() {
        return ['numbers'];
    }

    async fetchCustomResult() {
        try {
            const response = await fetch("https://localhost:5000/custom/result", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ numbers: this.getAttribute('numbers')})
            })

            if (response.ok) {
                const responseJSON = await response.json()
                console.debug("custom service responded with: " + JSON.stringify(responseJSON))
                this.buildPanel(responseJSON)
            } else {
                console.error("Server returned " + response.status + " : " + response.statusText)
            }
        } catch (error) {
            console.error(error);
        }
    }

    buildPanel(responseJSON) {

        var alert = document.createElement('div')
        var style = "display:flex;justify-content:center;align-items:center;height:100pc;"

        alert.setAttribute('style', responseJSON.status == "ALERT"? style + 'background-color:yellow' : style + 'background-color:green')
        alert.innerText = responseJSON.status == "ALERT"? 'Alert' : 'Ok'

        if(this.shadow.children.length > 0) {
            this.shadow.replaceChild(alert, this.shadow.children[0]);
        } else {
            this.shadow.appendChild(alert);
        }
    }
}

window.customElements.define('custom-panel', CustomPanel, { extends: 'div'})