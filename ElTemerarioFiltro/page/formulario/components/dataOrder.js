import { postCamper } from "./app.js";
export default{
    

 Order(){
    let bot=document.querySelector("#save");
    bot.addEventListener("click",()=>{
        event.preventDefault();
        let name=document.querySelector("#name").value
        let edad=document.querySelector("#edad").value
        let tel=document.querySelector("#tel").value
        let email=document.querySelector("#email").value
        let direction=document.querySelector("#dire").value
        let born=document.querySelector("#fNaci").value
        let identi=document.querySelector("#NIde").value
        let ingreso=document.querySelector("#FIngre").value
        let team=document.querySelector("#team").value
        let trainer=document.querySelector("#trainer").value
        let skill=document.querySelector("#skill").value
        let details=document.querySelector("#deta").value

        
        var data={
            name:name,
            edad:edad,
            tel:tel,
            email:email,
            direction:direction,
            born:born,
            identificacion:identi,
            ingreso:ingreso,
            team:team,
            trainer:trainer,
            skill:skill,
            detalles:details
        }
        console.log(data)


        
        if (validate(data)){
            alert("Todos los campos deben ser llenados")
            return;
           }
         
        postCamper(data);





        function validate(obj){
            return !Object.values(obj).every(element => element!=="")
        }

        
    })
    
}
}


