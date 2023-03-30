import config from "../storage/config.js";
export default {

cardSong(){
    config.dataMyHeader();
    Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));
    document.querySelector("#carta").insertAdjacentHTML("beforeend",`
    <h6 class="fst-italic">${this.phrase.alert}</h6>
    <h4 class="fst-italic text-danger">${this.phrase.nameSong}</h4>
    <p class="mb-0">${this.phrase.songPhrase}</p>
    `)
},
listaAlbums(){
    config.dataMyHeader();
    Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));
    let element="";
    this.albumsCompleate.forEach((val)=>{
        element+=`<li><a href="${val.href}" class=" text-decoration-none text-danger">${val.name}</a></li>`
        });
    document.querySelector("#lista").insertAdjacentHTML("beforeend",`
    <h4 class="fst-italic text-decoration-none">${this.nameList.nameIn}</h4>
    <ol class="list-unstyled mb-0">
    ${element}
    </ol>
    `)
},
networks(){
    config.dataMyHeader();
    Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));
    let script="";
    this.socialNetwork.forEach(
        (e)=>{
        script+=`<li><a class="text-decoration-none text-danger" href="${e.href}">${e.social}</a></li>`;
        },
        );
        document.querySelector("#socialNetworks").insertAdjacentHTML("beforeend",`
        <h4 class="fst-italic">${this.nameNet.name}</h4>
        <ol class="list-unstyled">
        ${script}
        </ol>
        
        `);
    },
} 