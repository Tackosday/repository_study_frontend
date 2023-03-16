// datos de la sede
let dataSede=document.querySelector("#dataSede");
let campers={};

dataSede.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data=Object.fromEntries(new FormData(e.target));
    campers[`${data.saveData}`] = []
    dataSede.reset();
})

//datos de los trainers o campers
let dataTrainerCamper=document.querySelector("#dataTrainerCamper");

dataTrainerCamper.addEventListener("submit",(e)=>{
    e.preventDefault();
    let info=Object.fromEntries(new FormData(e.target));
    console.log(info);
})

let lista=()=>{
    let options=document.querySelector("name='sede'")
    options.innerHTML=null;
    
}

