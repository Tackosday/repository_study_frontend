class lapiz{
    #marca
    constructor({color="#fff700",
                dimension=19,
                borrador=true,
                material="Madera",
                marca="Mongo"}){
        this.color = color;
        this.dimension = dimension;
        this.borrador = borrador;
        this.material = material;
        this.#marca = marca;
    }
    
    getMarca(){
        return this.#marca;       
    }
    getMaterial(){
        return this.material;
        
    }
}



/* pre-establecimiento de datos */
let obj = undefined;
let color = document.querySelector(`[name="color"]`);
let dimensiones = document.querySelector(`[name="dimension"]`);
let marca = document.querySelectorAll(`[name="marca"]`)
let borrador =document.querySelectorAll(`[name="borrador"]`);
let material = document.querySelectorAll(`[name="material"]`);

addEventListener("DOMContentLoaded",(e)=>{
    obj=new lapiz({});
    color.value = obj.color;
    dimensiones.value = obj.dimension;
    
    marca.forEach((e)=>{
        if(e.value=== obj.getMarca())
        e.checked=true;
    })

    borrador.forEach( (e) => {
        if(e.value === obj.borrador.toString()){
            e.checked=true;
        }
    
    material.forEach((e) => {
        if(e.value === obj.getMaterial()){
            e.checked=true;
        }
    })

    });
    })

    /* lectura de imputs */
    let lec = document.querySelector("#readBottom");
    lec.addEventListener(`click`,(e) => {
        e.preventDefault();
        /* color */
        let remplaceColor = color.value;
        /* dimension */
        let remplaceDimention = dimensiones.value
        /* marca */
        let remplaceMarca ="";
        marca.forEach((e)=>{
            if(e.checked){
                remplaceMarca = e.value;
            };
        })
        /* borrador */
        let remplaceBorrador ="";
        borrador.forEach((e)=>{
            if(e.checked){
                e.value==="true" ?remplaceBorrador = "Tiene" : remplaceBorrador = "No tiene" ;
            }
        }) 

        document.querySelector("#data").insertAdjacentHTML(`beforeend`,`
        <tr>
            <th>${remplaceColor}</th>
            <th>${remplaceDimention}</th>
            <th>${remplaceMarca}</th>
            <th>${remplaceBorrador}</th>
            <th>Material</th>
        </tr>
        `)
    })

    
    let dim =dimensiones.value
    document.querySelector(`beforeend`,`
    <label>${dim} cm</label>
    `)
    
