
export let header={
titlePage(e){
    return `<a class="blog-header-logo text-white text-decoration-none" href="${e.href}">${e.name}</a>`
},
banners(element){
let plantilla="";
element.forEach((val)=>{
    plantilla+=`<a class="p-2 link-secondary text-decoration-none text-white" href="${val.href}">${val.name}</a>`});
    return `${plantilla}`;
}
}
self.addEventListener("message",(e)=>{
postMessage(header[`${e.data.module}`](e.data.data))


})
