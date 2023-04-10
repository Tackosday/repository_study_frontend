export default{
    redirect(){
        function lecData(){
        
        };

        const checkbox = document.querySelector("#checkbox")
        checkbox.checked=true;
        checkbox.addEventListener('change',(e)=>{ 
            let point=e.target.checked;
           switch(point){
            case true:
                console.log(":)");
            lecData();
                break;
            case false:
                console.log(":(");
                break;      
           }
            });
    }
    
}