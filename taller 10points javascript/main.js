let numeros=[];
var num=2;
while(num!=0){
   var num=parseFloat(prompt("digita un numero y el 0 si quieres finalizar"));
   if(num!=0){
      numeros.push(num);
   }
   console.log(numeros)
}
let i=0;
var sum=0;
const tot= numeros.length;

//suma
for(i=0;i<tot;i++){
   sum+=numeros[i]
}
console.log(tot)
console.log(`el valor de la suma es ${sum}`);
console.log(`el promedio de los datos son ${sum/(tot)}`);
console.log(`se digitaron ${tot} numeros sin contar el 0`);
console.log(`el mayor de los datos fue ${Math.max(...numeros)}`);
console.log(`el menor de los datos fue ${Math.min(...numeros)}`);
