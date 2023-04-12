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
    getColor(){
        return this.color;
    }
}
    
let obj = undefined;
let color = document.querySelector(`[name="color"]`);
addEventListener("DOMContentLoaded",(e)=>{
    obj=new lapiz({});
    color.value = obj.color;
});