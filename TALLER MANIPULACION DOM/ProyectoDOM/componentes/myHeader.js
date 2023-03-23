export default {
    
    title:{
        name:"EL CUARTETO DE NOS",
        href:"https://cuartetodenos.com.uy/"
    },
    Albums:[
    {
        name:"RARO",
        href:"https://www.youtube.com/watch?v=FTHnXLw6_Jk&t=1s"
    },
    {
        name:"PORFIADO",
        href:"https://www.youtube.com/watch?v=k-wO4e4h3us"
    },
    {
        name:"BIPOLAR",
        href:"https://www.youtube.com/watch?v=AZm3Q-HIp80"
    },
    {
        name:"APOCALIPSIS ZOMBIE",
        href:"https://www.youtube.com/watch?v=FTHnXLw6_Jk&t=1s"
    },
    {
        name:"HABLA TU ESPEJO",
        href:"https://www.youtube.com/watch?v=uUy0577epHo&list=PLjHAKTrRyrBvWA0cHbjpCzJcJbv2a_fBq"
    },

],

theTitle(){
    document.querySelector("#title").insertAdjacentHTML("beforeend",`<a class="blog-header-logo text-dark text-decoration-none" href="${this.title.href}">${this.title.name}</a>`)
},


albumList(){
let plantilla="";
this.Albums.forEach((val,id)=>{
    plantilla+=`<a class="p-2 link-secondary text-decoration-none"
    href="${val.href}">${val.name}</a>`
    });
    document.querySelector("#Albums").insertAdjacentHTML("beforeend",plantilla);
}
 }