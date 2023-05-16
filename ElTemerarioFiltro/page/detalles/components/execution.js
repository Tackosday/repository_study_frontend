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
                    <p class="letter name">${e.name}</p>
                    <p class="letter cedula">${e.identificacion}</p>
                    <p class="letter fIngreso">${e.ingreso}</p>
                    <p class="letter skill">${e.skill}</p>
                </div>
                <div>
                    <img src="../../resources/basura.png" alt="basura.png" style="width: 60px;" class="${e.id}" id="trash">
                </div>
                </div>
                `)
            });

            let trash= document.querySelectorAll("#trash")
            let i;
            for(i=0;trash.length;i++){
                trash[i].addEventListener("click",()=>{
                    
                })
            }
            })

            .catch(error=>{console.log(error)})
        }
    }