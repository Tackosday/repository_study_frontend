import config from "../storage/config.js";
export default {
    


worker(){
    config.dataMyHeader();
    Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));
    const work= new Worker(`storage/wsHeader.js`,{type:"module"});
    let id=[];
    let count=0;
    work.postMessage({module:"titlePage", data:this.title});
    work.postMessage({module:"banners", data:this.Albums});
    work.addEventListener("message",(e)=>{
        id=["#title","#Albums"];
        let traduction=new DOMParser().parseFromString(e.data,"text/html");
        document.querySelector(id[count]).append(...traduction.body.children);
        (id.length-1==0) ? work.terminate():count++;
    });   
}
 }