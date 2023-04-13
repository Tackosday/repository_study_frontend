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
    getDimension(){
        return this.dimension;
    }
    getborrador(){
        return this.borrador;
    }
    getMaterial(){
        return this.material;
    }
}
    
let obj = undefined;
let color = document.querySelector(`[name="color"]`);
let dimensiones = document.querySelector(`[name="dimension"]`);
let borrador =document.querySelector(`[name="borrador"]`);
// let material = document.querySelector(`[name="material"]`);
let material = document.querySelector("tester");
material.checked=true;
addEventListener("DOMContentLoaded",(e)=>{
    obj=new lapiz({});
    color.value = obj.color;
    dimensiones.value = obj.dimension;
    
 })

 
 function showValue(newValue) {
    document.getElementById("rangeValue").innerHTML = newValue;
 }

 let myString = "true";
let myBoolean = Boolean(myString);
