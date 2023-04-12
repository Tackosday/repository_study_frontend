export default{
    // worker(){
    //     /* workers */
    //     const work = new Worker(`../storage/wsImput.js`,{type:"module"});
    //     work.addEventListener("message",(e)=>{
    //         let traduction = new DOMParser().parseFromString(e.data,"text/html");
    //         document.querySelector("#tester").append(...traduction.body.children);
    //         work.terminate();
    //     })
    // },

    redirect(){
        const ingresosData=[];
        const egresos=[];
        const descrip=document.querySelector("#description");
        const amount=document.querySelector("#amount");
        const saveBottom=document.querySelector("#bottomSave")
        const checkbox = document.querySelector("#checkbox");
        let point;
        
        checkbox.addEventListener('change',(e)=>{
            point=e.target.checked
        });
        saveBottom.addEventListener('click',()=>{
            const dato1=descrip.value;
            const dato2=amount.value;
            switch(point){
                case true:
                    /* creacion de bases de datos */
                    console.log(":)");
                    ingresosData.push({dato1,dato2});
                    console.log(ingresosData);
                    /* local storage */
                    // let JSONingresos=JSON.stringify(ingresosData);
                    // localStorage.setItem("ingresos",JSONingresos)
                    ingresosData.forEach((e)=>{
                        blockTable=`
                        <td class="descrip">
                        `
                    })
                    
                    
                 break;

                case false:
                    console.log(":(");
                    egresos.push({dato1,dato2});
                    console.log(egresos);
                    let JSONegresos=JSON.stringify(egresos);
                    localStorage.setItem("egresos",JSONegresos)
                 break;   
                 
            
            }
        });
    }
}
    
