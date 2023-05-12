
let url = "http://localhost:4001/campers";
export let postCamper = async (data) =>{
                try{
                    await fetch(url,{
                        method:`POST`,
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body:JSON.stringify(data)
                    });
                    window.location.href ="index.html"
                }
                catch(error){
                    console.log(error);
                }
            }
