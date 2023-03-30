export default {
banner1:{
    subtitle:"UNA BANDA MUY RARA",
    parrafo:"El mejor rock de toda sudamerica....o de todo el mundo",
},
worker(){
    const work= new Worker(`storage/wsBanner.js`,{type:"module"}); 
    work.postMessage({module:"banInfo", data:this.banner1});
    work.addEventListener("message",(e)=>{
        let traduction = new DOMParser().parseFromString(e.data,"text/html");
        document.querySelector("#banner1").append(...traduction.body.children);
        work.terminate();
    })
}

}