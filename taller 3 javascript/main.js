let dataSede= document.querySelector("#dataSede");
dataSede.addEventListener((e)=>{
    e.preventDefault();
    console.log(object.fromEntries(new FormData(e.target)));
})