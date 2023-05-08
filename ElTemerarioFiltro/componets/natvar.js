class natvar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }
    connectedCallback(){
        this.shadowRoot.innerHTML=`
        <section style="background-color: rgba(0, 0, 0, 0.678);height: 60px;width: 100%;display: flex;justify-content: space-between;border-bottom:solid;border-bottom-color:white;border-bottom-left-radius:10px;border-bottom-right-radius:10px">
        <div style="display:flex;width: 20%;">
            <img style="width: 60px;margin-left: 60px;margin-right: 15px;" src="https://seeklogo.com/images/S/star-wars-logo-80607D2AC5-seeklogo.com.png" alt="coete">
            <div>
                <h1 style="color:white; margin-top: 10px;margin-bottom: 0px;font-size: 15px;width:150px">centro aeroespacial</h1>
                <h1 style="color:white; margin-top: 0px;margin-bottom: 0px;margin-left: 20px;width:150px">tower zenith</h1>
            </div>
        </div>
        <div style="display:flex;width: 50%;">
            <div class="bot" style="margin: 0px;width:33% ;padding: 2px 0px;">
                <h1><a style="color:white;text-decoration: none;" href="../home/index.html">HOME</a></h1>
            </div>
            <div class="bot" style="margin: 0px;width:33% ;padding: 2px 0px;">
                <h1><a style="color:white;text-decoration: none;" href="../formulario/index.html">SIGN UP</a></h1>
            </div>
            <div class="bot" style="margin: 0px;width:34% ;padding: 2px 0px;">
                <h1><a style="color:white;text-decoration: none;" href="../detalles/index.html">DATA</a></h1>
            </div>
        </div>
    </section>
        `
    }   
}
customElements.define("my-natvar",natvar)