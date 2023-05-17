import { deleteCamper } from "./app.js";
export default{
   get(){
        let url="http://localhost:4001/campers";
        fetch(url)
        .then(traduc=>{return traduc.json()})
        .then(data=>{
            let btn=document.querySelector("#check")
            let manager=document.querySelector("#manager").value
            switch(manager){
                case("trainer"):

                    break;
                case("horario"):

                    break;
                case("ingreso"):

                    break;
                case("..."):
                    data.forEach(e => {
                        let contain=document.querySelector("#contain")
                       contain.insertAdjacentHTML("beforeend",`
                       <div class="card" id="card">
                       <div class="imgBox">
                           <img src="../../resources/user.png" alt="user" class="img">
                       </div>
                       <div class="text">
                       <p class="letter ">${e.id}</p>
                           <p class="letter name">${e.name}</p>
                           <p class="letter cedula">${e.identificacion}</p>
                           <p class="letter fIngreso">${e.ingreso}</p>
                           <p class="letter skill">${e.skill}</p>
                       </div>
                       </div>
                       `)
                   });
                    break;
            }





            
            
            let delet = document.querySelector("#delet")
             delet.addEventListener("click",()=>{
                event.preventDefault();
                let idD=document.querySelector("#value").value
                deleteCamper(idD)

             })
            })

            .catch(error=>{console.log(error)})
        }
    }