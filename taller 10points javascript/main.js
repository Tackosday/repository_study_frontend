let eda0=parseInt(prompt("edad del primer usuario"));
let eda1=parseInt(prompt("edad del segundo usuario"));
let eda2=parseInt(prompt("edad del tercero usuario"));
let mayor;
let cual;
if(eda0>eda1){
    if(eda0>eda2){
        cual="primero";
        mayor=eda0;
    }else{
        cual="tercero";
        mayor=eda2;
    }
}else{
    if(eda1>eda2){
        cual="segundo";
        mayor=eda1;
    }else{
        cual="tercero";
        mayor=eda2;
    }
}

console.log(`el usuario con mas años es el ${cual} con ${mayor} años`)
