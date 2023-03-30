import config from "../storage/config.js";
export default{


fooder(){
    config.dataMyHeader();
    Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));
    document.querySelector("#fooder").insertAdjacentHTML("beforeend",`
    <h5 class="text-danger">${this.food.One}</h5>
    <p class="text-danger">${this.food.href}</p>
      <a>${this.food.Two}</a>
    </p>
    `)
},
elCuarteto(){
    config.dataMyHeader();
    Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));
    document.querySelector("#secBottom").insertAdjacentHTML("beforeend",`
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5vcK2Dr4G349DFNelTUhQQ?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `)
    this.bottoms.forEach((e)=>{
        document.querySelector("#secBottom").insertAdjacentHTML("beforeend",`
        <a class="btn btn-outline-danger" href="${e.href}">${e.name}</a>
        `);
    })
},

articleTwoAct(){
    config.dataMyHeader();
    Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));
    document.querySelector("#loreTwo").insertAdjacentHTML("afterbegin",`<h3>${this.articleTwoFuntion.name}</h3>`)
    let scriptAct="";
    this.articleTwo.forEach((e)=>{
      document.querySelector("#tabla").insertAdjacentHTML("beforeend",`
       <tr>
       <th>${e.celdaOne}</th>
       <th>${e.celdaTwo}</th>
       <th>${e.celdaThree}</th>
       </tr>
      `)
    });
    
},
articleOneAct(){
    config.dataMyHeader();
    Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));
    document.querySelector("#loreOne").insertAdjacentHTML("beforeend",`
    <br>
    <h1 class="text-center text-danger">${this.articleOne.first.title}</h1>
    <p>${this.articleOne.first.parrafoOne}</p>
    <p>${this.articleOne.first.parrafoTwo}</p>
    <a><img src="${this.articleOne.first.imagenOne}" width="100%"></a>
    <br>
    <br>
    <h1 class="text-center text-danger">${this.articleOne.second.title}</h1>
    <p>${this.articleOne.second.parrafoOne}</p>
    <h5>${this.articleOne.second.subtitleOne}</h5>
    <p>${this.articleOne.second.parrafoTwo}</p>
    <h5>${this.articleOne.second.subtitleTwo}</h5>
    <p>${this.articleOne.second.parrafoEigth}</p>
    <h5>${this.articleOne.second.subtitleThree}</h5>
    <p>${this.articleOne.second.parrafoFour}</p>
    <h5>${this.articleOne.second.subtitleFour}</h5>
    <p>${this.articleOne.second.parrafoFive}</p>
    <h5>${this.articleOne.second.subtitleFive}</h5>
    <p>${this.articleOne.second.parrafoSix}</p>
    <h5>${this.articleOne.second.subtitleSix}</h5>
    <p>${this.articleOne.second.parrafoSeven}</p>
    <h5>${this.articleOne.second.subtitleSeven}</h5>
    <p>${this.articleOne.second.parrafoEigth}</p>
    <h5>${this.articleOne.second.subtitleEigth}</h5>
    <p>${this.articleOne.second.parrafoNine}</p>
    <p>${this.articleOne.second.parrafoTen}</p>
    <h5>${this.articleOne.second.subtitleNine}</h5>
    <p>${this.articleOne.second.parrafoEleven}</p>
    <h5>${this.articleOne.second.subtitleTen}</h5>
    <p>${this.articleOne.second.parrafoTwelve}</p>
    <h5>${this.articleOne.second.subtitleEleven}</h5>
    <p>${this.articleOne.second.parrafoThirteen}</p>
    <h5>${this.articleOne.second.subtitleTwelve}</h5>
    <p>${this.articleOne.second.parrafoFourteen}</p>



    `);
},
genre(){
    config.dataMyHeader();
    Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));
        let script="";
        this.Género.forEach(
            (e)=>{
            script+=`<h5 class="text-danger m-2">${e.type+" · "}</h5>`
            });
        document.querySelector("#generos").insertAdjacentHTML("afterbegin",script);
    },

}