let num0=parseInt(prompt("digita un numero"));
let nume=num0%2
let sol;
if(nume==0){
    sol="este numero es par";
}else if(nume=1){
    sol="este numero no es par";
}

if(num0>10){
    console.log(`este numero es mayor a 10 y ${sol}`);
}else{
    console.log(`este numero no es mayor a 10 y ${sol}`);
}