export default {
banner1:{
    subtitle:"UNA BANDA MUY RARA",
    parrafo:"El mejor rock de toda sudamerica....o de todo el mundo",
},

titleBannerOne(){
    document.querySelector("#banner1").insertAdjacentHTML("afterbegin",`<h1 class="display-4 fst-italic">${this.banner1.subtitle}</h1>`)
    document.querySelector("#banner1").insertAdjacentHTML("beforeend",`<p class="lead my-3">${this.banner1.parrafo}</p>`)
    document.querySelector("#banner1").insertAdjacentHTML("beforeend",`<p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>`)
}
}