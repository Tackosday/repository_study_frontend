import { deleteCamper } from "./app.js";
export default{
    get(){
        
        
        
        let url="http://localhost:4001/campers";
        fetch(url)
        .then(traduc=>{return traduc.json()})
        .then(data=>{
            
            let nave=document.querySelector("#reload")
            nave.addEventListener("click",()=>{
                location.reload();
            })


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




            let trainer=document.querySelector("#trainer")
            let team=document.querySelector("#team")
            team.addEventListener("click",()=>{
                let fil=document.querySelector("#fil")
                let deside=document.querySelector("#deside")
                deside == null? null : deside.remove();   
                fil.insertAdjacentHTML("beforeend",`
                <div id="deside">
                <select name="filter">
                <option value="one">team 1</option>
                <option value="two">Team 2</option>
                <option value="three">Team 3</option>
                </select>
                <button id="check">check</botton>
                </div>
                `)

                let check=document.querySelector("#check")
                check.addEventListener("click",()=>{
                let valor =document.querySelector(`[name=filter]`).value
                
                switch (valor) {
                    case("one"):

                    let contain = document.querySelector("#contain");
                    contain.remove();
                    let body=document.querySelector("#body")
                    body.insertAdjacentHTML("beforeend",`<div class="margin" id="contain"></div>`)
                    
                    data.forEach(e=>{
                        
                      if(e.team=="01") {
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
                      }
                    })
                        break;
                    case("two"):
                    let containt = document.querySelector("#contain");
                    containt.remove();
                    let bodyt=document.querySelector("#body")
                    bodyt.insertAdjacentHTML("beforeend",`<div class="margin" id="contain"></div>`)
                    
                    data.forEach(e=>{
                        
                      if(e.team=="02") {
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
                      }
                    })
                    break;
                    case("three"):
                    let containh = document.querySelector("#contain");
                    containh.remove();
                    let bodyh=document.querySelector("#body")
                    bodyh.insertAdjacentHTML("beforeend",`<div class="margin" id="contain"></div>`)
                    
                    data.forEach(e=>{
                        
                      if(e.team=="03") {
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
                      }
                    })
                    break;
        
                }
                    
                })




            
            trainer.addEventListener("click",()=>{
                let fil=document.querySelector("#fil")
                let deside=document.querySelector("#deside")
                deside == null? null : deside.remove();   
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
                        
                        let contain = document.querySelector("#contain");
                        contain.remove();
                        let body=document.querySelector("#body")
                        body.insertAdjacentHTML("beforeend",`<div class="margin" id="contain"></div>`)
                        
                        data.forEach(e=>{
                            
                          if(e.trainer=="MIGEL") {
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
                          }
                        })
                        break;


                        case("yolver"):
                        let containy = document.querySelector("#contain");
                        containy.remove();
                        let bodyy = document.querySelector("#body")
                        bodyy.insertAdjacentHTML("beforeend",`<div class="margin" id="contain"></div>`)
                        
                        data.forEach(e=>{
                            
                          if(e.trainer=="YOLBER") {
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
                          }
                        })
                        break;
                        
                        
                        case("velmer"):
                        let containv = document.querySelector("#contain");
                        containv.remove();
                        let bodyv = document.querySelector("#body")
                        bodyv.insertAdjacentHTML("beforeend",`<div class="margin" id="contain"></div>`)
                        
                        data.forEach(e=>{
                            
                          if(e.trainer=="VELMER") {
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
                          }
                        })
                        break;
                    }

                })
            })
            
            
                    
            


            let delet = document.querySelector("#delet")
            delet.addEventListener("click",()=>{
                event.preventDefault();
                let idD=document.querySelector("#value").value
                deleteCamper(idD)

            })
            })

            .catch(error=>{console.log(error)})
        })
    }
}