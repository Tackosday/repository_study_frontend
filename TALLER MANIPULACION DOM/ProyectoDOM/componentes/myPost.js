export default {
dataCardOne:{
    strongTitle:"Porfiado",
    titleCard:"Lo malo de ser bueno",
    subtitle:"30/10/2015",
    paragraph:'"La verdad es que no hay una verdad, leí en una pared de la ciudad ¿Habrá sido una virtud o casualidad? Y sentí inquietud, de estar a merced de tanta sed de dualidad"',
    continue:"escuchalo...",
    continueLink:"https://www.youtube.com/watch?v=S_roMeig-YQ&list=OLAK5uy_kygEpxzZ-hsVK-6XtONLL1hUnInI1l8Vg&index=6",
    image:"resources/Porfiado.jpeg"
},
dataCardTwo:{
    strongTitle:"Raro",
    titleCard:"Tiburones en el bosque",
    subtitle:"15/08/2019",
    paragraph:'"Y claro que hay que arriesgar, saltar por encima del muro, un barco en el puerto está bien seguro pero fue hecho para navegar"',
    continue:"escuchalo...",
    continueLink:"https://www.youtube.com/watch?v=KdUDyFWhXjg",
    image:"resources/Raro.jpeg"
},
miniBannerOne(){    
    document.querySelector("#cardOne").insertAdjacentHTML("beforeend",`
    <strong class="small d-inline-block mb-2 text-danger">${this.dataCardOne.strongTitle}</strong>
    <h3 class="small mb-0">${this.dataCardOne.titleCard}</h3>
    <div class=dangermb-1 text-muted">${this.dataCardOne.subtitle}</div>
    <p class="small card-text mb-auto">${this.dataCardOne.paragraph}</p>
    <a href="${this.dataCardOne.continueLink}" class="stretched-link text-danger">${this.dataCardOne.continue}</a>
    `)
    document.querySelector("#imageOne").insertAdjacentHTML("beforeend",`<a href="${this.dataCardOne.continueLink}}"><img src="${this.dataCardOne.image}" width="250px" height="250px"></a>`)   

},
miniBannerTwo(){
    console.log("here")
    document.querySelector("#cardTwo").insertAdjacentHTML("beforeend",`
    <strong class="small d-inline-block mb-2 text-danger">${this.dataCardTwo.strongTitle}</strong>
    <h3 class="small mb-0">${this.dataCardTwo.titleCard}</h3>
    <div class="small mb-1 text-muted">${this.dataCardTwo.subtitle}</div>
    <p class="small card-text mb-auto">${this.dataCardTwo.paragraph}</p>
    <a href="${this.dataCardTwo.continueLink}" class="stretched-link text-danger">${this.dataCardTwo.continue}</a>
    `)
    document.querySelector("#imageTwo").insertAdjacentHTML("beforeend",`<a href="${this.dataCardTwo.continueLink}}"><img src="${this.dataCardTwo.image}" width="250px" height="250px"></a>`)       
}
}
