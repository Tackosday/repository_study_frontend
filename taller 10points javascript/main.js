let atleta=[];
let marcas=[];
do{
let atleta0=prompt("nombre del atleta");
let marca0=parseFloat(prompt("cuanto fue su marca"));

atleta.push(atleta0)
marcas.push(marca0)
console.log(atleta,marcas)
}while(confirm("desea agregar mas datos??")){    

}
let mayor=Math.max(...marcas)
let uca=marcas.indexOf(mayor)
console.log(`el ganador de los juegos olipicos de triple salto es ${atleta[uca]}`)
 if (marcas.indexOf(mayor)>15.50){
    console.log("ademas ganaste 500 millones de pesos")
 }