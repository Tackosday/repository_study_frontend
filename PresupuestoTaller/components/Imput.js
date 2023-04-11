export default{
    redirect(){
        const ingresos=[];
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
                 console.log(":)");
                 ingresos.push({dato1,dato2});
                 console.log(ingresos);
                 document.querySelector("#ingresosTable").insertAdjacentHTML(`
                 
                 `)
                 break;
             case false:
                 console.log(":(");
                 egresos.push({dato1,dato2});
                 console.log(egresos);
                 document.querySelector("#egresosTable").insertAdjacentHTML(`
                 
                 `)
                 break;      
            }
        });
    }
    
}