import { deleteCamper } from "./app.js";
export default{
    get(){
        let url="http://localhost:4001/campers";
        fetch(url)
        .then(traduc=>{return traduc.json()})
        .then(data=>{
            
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

            let team=document.querySelector("#team")
            let trainer=document.querySelector("#trainer")
            trainer.addEventListener("click",()=>{
                let fil=document.querySelector("#fil")
                let deside=document.querySelector("#deside")
                deside == null? console.log("noEsta") : deside.remove();   
                fil.insertAdjacentHTML("beforeend",`
                <div id="deside">
                <select name="filter">
                <option value="miguel">Miguel</option>
                <option value="yolver">Yolber</option>
                <option value="velmer">Velmer</option>
                </select>
                <button id="check">check</botton>
                </div>
                `) 
                let check=document.querySelector("#check")
                check.addEventListener("click",()=>{
                    let valor =document.querySelector(`[name=filter]`).value
                    switch(valor){
                        case("miguel"):
                        break;

                        case("yolver"):
                        console.log("Y")
                        break;
                        case("vermer"):
                        console.log("V")
                        break;
                    }

                })
            })

            /* team.addEventListener("click",()=>{
                let fil=document.querySelector("#fil")
                let deside=document.querySelector("#deside")
                deside!=null? deside.remove(): console.log("noEsta") ;   
                insertAdjacentHTML("beforeend",`
                <div id="deside">
                <select name="filter">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                </select>
                <button>check</botton>
                </div>
                `)

                
            }) */
            
            
                    
            


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