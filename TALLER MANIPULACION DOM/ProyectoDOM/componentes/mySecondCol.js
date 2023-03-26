export default {
phrase:{
    alert:"Ultima cancion !!!",
    nameSong:"Rorschach",
    songPhrase:'"No veo lo que ven pero veo donde van creen que su historia es la única verdad yo solo espero que esto pronto termine que ya no me vigilen y que me dejen volar"',
},
nameList:{
    nameIn:"Discografia",
},
albumsCompleate:[
    {  
    name:"Raro",
    hreft:"https://www.youtube.com/watch?v=qfWRq-x2Lhg&list=OLAK5uy_mowrwppWgPhTiPoHLz7OOU8RWYQ_3l-hU&ab_channel=ElCuartetodeNos-Topic"
    },
    {  
    name:"Porfiado",
    hreft:"https://www.youtube.com/watch?v=WZkd2XUG2VU&list=OLAK5uy_kygEpxzZ-hsVK-6XtONLL1hUnInI1l8Vg&ab_channel=ElCuartetodeNos-Topic"
    },
    {  
    name:"Bipolar",
    hreft:"https://www.youtube.com/watch?v=PicBpM8Ajg0&list=OLAK5uy_lyCNeOpAQznJFIoCehTJqwgNF5gwa5RHU&ab_channel=ElCuartetodeNos-Topic"
    },
    {  
    name:"Apocalipsis zombie",
    hreft:"https://www.youtube.com/watch?v=xSGasP76AwQ&list=OLAK5uy_lSm1uzak9h6ch0cuF0v71-Eu9SSZBR-ao&ab_channel=CuartetodenosVEVO"
    },
    {  
    name:"Habla tu espejo",
    hreft:"https://www.youtube.com/watch?v=iro4aGaKVZ8&list=OLAK5uy_kTVMQRdC_agDPMR9iXnqaB-Z8vRCJXKjU&ab_channel=CuartetodeNos"
    },
    {  
    name:"Jueves",
    hreft:"https://www.youtube.com/watch?v=-RNbCW8yCpI&list=OLAK5uy_nESi36IUaDu6wauyiYxEG0dM-MqMF-MKo&ab_channel=CuartetodenosVEVO"
    },
    {  
    name:"El cuarteto de nos",
    hreft:"https://www.youtube.com/watch?v=wFaR7y8K4qk&list=OLAK5uy_maBZ5v6_NQxV_t-_RhcctBODUJ_avGodY&ab_channel=ElCuartetodeNos-Topic"
    },
    {  
    name:"Cortamambos",
    hreft:"https://www.youtube.com/watch?v=onQU3sp8_Jk&list=OLAK5uy_l-x6Oi29nRkHUljPnYjs71U8F39etYnVE&ab_channel=ElCuartetodeNos-Topic"
    },
    {  
    name:"Otra navidad en las trincheras",
    hreft:"https://www.youtube.com/watch?v=Yn6H0a-aRJk&list=OLAK5uy_kfQn3tOl_8AWql1YPtPgsT61no5dovsD8&index=1&ab_channel=ElCuartetodeNos-Topic"
    },
    {
    name:"Revista ¡Ésta!",
    hreft:"https://www.youtube.com/watch?v=9B3cTZD4M7w&list=OLAK5uy_lwxpculuj0h5fcpPdKRiDvgJ9Rj1PMMHk&index=1&ab_channel=ElCuartetodeNos-Topic"
    },
    {
    name:"El tren bala",
    hreft:"https://www.youtube.com/watch?v=MZh_o0gj4PU&list=OLAK5uy_nKs8Qrc-NfDW5PRp2cgoERQSmYGPy9oU0&ab_channel=ElCuartetodeNos-Topic"
    },
    {
    name:"Canciones del corazon ",
    hreft:"https://www.youtube.com/watch?v=QUbmkFe9qfs&list=OLAK5uy_n29hrtLn_m-NDNDkWED6wOOw45CyT53a0&ab_channel=ElCuartetodeNos-Topic"
    },
    {
    name:"Barranca abajo",
    hreft:"https://www.youtube.com/watch?v=ZVi0nhGDR1I&list=OLAK5uy_lBkt2Drvswj_CHPVF6DeNs9cq7lzHQI9Y&ab_channel=ElCuartetodeNos-Topic"
    },
    {
    name:"Soy una arveja",
    hreft:"https://www.youtube.com/watch?v=41H2342k9c4&list=OLAK5uy_mL94j6cXZszdv4rVy-sRV5i6VHwIIY-G0&ab_channel=ElCuartetodeNos-Topic"
    },
    {
    name:"Emilio García",
    hreft:"https://www.youtube.com/watch?v=3XOhRo52Jvc&list=OLAK5uy_mTE3xyzHrMxxsOi80Jkl-TE4KvoNoLanY&ab_channel=ElCuartetodeNos-Topic"
    },
    {
    name:"Lamina once",
    hreft:"https://www.youtube.com/watch?v=gxG4o0b7T3E&list=OLAK5uy_kKsN-iNaIn4ACxwZ9SWMI4tpfVM1bWY60&ab_channel=ElCuartetodeNos-Topic"
    }
],
nameNet:{
    name:"Redes sociales"
},
socialNetwork:[
    {
        social:"Instagram",
        href:"https://www.instagram.com/cuartetodenosok/?hl=es-la"
    },
    {
        social:"Facebook",
        href:"https://www.facebook.com/people/Cuarteto-de-Nos/100044328944720/"
    },
    {
        social:"Youtube",
        href:"https://www.youtube.com/user/cuartetodenos"
    },
    {
        social:"Spotify",
        href:"https://open.spotify.com/artist/13JJKrUewC1CJYmIDXQNoH"
    },
    {
        social:"TiKtok",
        href:"https://www.tiktok.com/@cuartetodenosoficial"
    },
],









cardSong(){
    console.log("here")
    document.querySelector("#carta").insertAdjacentHTML("beforeend",`
    <h6 class="fst-italic">${this.phrase.alert}</h6>
    <h4 class="fst-italic text-danger">${this.phrase.nameSong}</h4>
    <p class="mb-0">${this.phrase.songPhrase}</p>
    `)
},
listaAlbums(){
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