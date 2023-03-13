let num0=parseInt(prompt("da un numero"));
let num1=parseInt(prompt("da otro numero"));

if(num0>num1){
    console.log("adicion");
    console.log(`${num0} + ${num1} = ${num0+num1}`);
    console.log("sustraccion");
    console.log(`${num0} - ${num1} = ${num0-num1}`);
}else{
    console.log("producto");
    console.log(`${num0} % ${num1} = ${num0%num1}`);
    console.log("sustraccion");
    console.log(`${num0} / ${num1} = ${num0/num1}`);
}
