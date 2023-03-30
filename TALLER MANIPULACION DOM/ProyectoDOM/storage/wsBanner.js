export let banner={
    banInfo(e){
         return `
         <h1 class="display-4 fst-italic">${e.subtitle}</h1>
         <p class="lead my-3">${e.parrafo}</p>
         <p class="lead mb-0"><a href="#" class="text-white fw-bold text-decoration-none">Continue reading...</a></p>
         `;
    },
}
self.addEventListener("message",(e)=>{
    postMessage(banner[`${e.data.module}`](e.data.data))
})