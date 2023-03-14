let bool=true;
let nombres=[];
let genero=[];
let final=[];

console.log("digital los siguientes datos??");
do{
    let nombre=prompt("ingresa el nombre");
    let sexo=prompt("ingresa el sexo");
    let nota=parseInt(prompt("ingresa tu nota final"));
    nombres.push(nombre);
    genero.push(sexo);
    final.push(nota);
    console.log(nombres);
    console.log(genero);
    console.log(final);
 
}while(confirm("desea continuar??"))
let mayor=Math.max(...final);
let num=final.indexOf(mayor);
console.log(`la nota mas alta fue la de ${nombres[num]} con una nota de ${mayor}`)