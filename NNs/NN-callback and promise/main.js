let body = document.querySelector("#body");
function BackSquare(square,callback){
    body.insertAdjacentHTML("beforeend",`
        <div style="background-image: linear-gradient(60deg,rgb(17, 0, 255),rgb(0, 247, 255));width: 150px;height: 150px;border-radius: 10px;"></div>
        ${square}
        `);
        setTimeout(()=>{
        console.log("loading...")
        },500)
        callback();
    
}
const htmlSquare = `<div style="background-color:rgba(9, 1, 66, 0.87);width: 145px;height: 145px;z-index: 1; position:absolute;border-radius: 10px;"></div>`

BackSquare(htmlSquare,()=>{
    setTimeout(()=>{
        console.log("exito en el callback")
    },2000)
})
