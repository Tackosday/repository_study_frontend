export class myMenu extends htmlElement{
    constructor(){
        super();
        this.atachShadow({mode:"open"})
    }
    conectedCallback(){
        this.shadowRoot.innerHTML = /*html*/`
            <style rel="styleHeet">
                @import "./componentes/myMenu.css";
            </style>
            <div class="h7">${this.texto()}</div>
    `;    
    }
    texto(){
        return `hola7`;
    }    
}
    
customElements.define("my-h7,myMenu");