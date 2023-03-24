export default{

    Género:[
        {
            type:"Rock"
        },{
            type:"Pop"
        },{
            type:"Alterlatino"
        },{
            type:"Hip hop"
        },{
            type:"Experimental"
        }
    ],
    genre(){
        let script="";
        this.Género.forEach(
            (e)=>{
            script+=`<h5 class="text-danger ">${e.type+" · "}</h5>`
            });
        document.querySelector("#generos").insertAdjacentHTML("afterbegin",script);
    },

}