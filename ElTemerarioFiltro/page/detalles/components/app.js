export let deleteCamper= async(id)=>{
    try{
        await fetch(`http://localhost:4001/campers/${id }`,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            }

        });
        window.location.href="index.html"
    }
    catch(error){
        console.log(error)
    }
}