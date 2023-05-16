
let url = "http://localhost:4001/campers";
export let postCamper = async (data) =>{
                try{
                   await fetch(url,{
                    method:"POST",
                    headers:{'content-Type':'Application/json'},
                    body:JSON.stringify(data)     
                })
                Window.location.href="indesx.html"
                }
                catch(error){
                    console.log(error);
                }
            }
