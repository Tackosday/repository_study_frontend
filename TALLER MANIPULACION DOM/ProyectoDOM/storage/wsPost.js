export let posters={
    post(element){
        let card="";
        let final="";
        element.forEach((e)=>{
            card=`
            <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static " id="cardOne">
            <strong class="small d-inline-block mb-2 text-danger">${e.strongTitle}</strong>
            <h3 class="small mb-0">${e.titleCard}</h3>
            <div class="small dangermb-1 text-muted">${e.subtitle}</div>
            <p class="small card-text mb-auto">${e.paragraph}</p>
            <a href="${e.continueLink}" class="stretched-link text-danger">${e.continue}</a> 
            </div>
            <div class="col-auto d-none d-lg-block" id="imageOne">
            <a href="${e.continueLink}}"><img src="${e.image}" width="250px" height="250px"></a>
            </div>
            </div>
             </div>
            `
            final+=`${card}`
        });
        return final;
    },
}
self.addEventListener("message",(e)=>{
    postMessage(posters[`${e.data.module}`](e.data.data))
})