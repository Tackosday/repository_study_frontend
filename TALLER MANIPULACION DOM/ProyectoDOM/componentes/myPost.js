import config from "../storage/config.js";
export default {


worker(){
  config.dataMyHeader();
  Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));
  const work=new Worker(`storage/wsPost.js`,{type:"module"});
  work.postMessage({module:"post",data:this.cartas});
  work.addEventListener("message",(e)=>{
  let traduction= new DOMParser().parseFromString(e.data,"text/html");
  document.querySelector("#secBaners").append(...traduction.body.children);
  work.terminate();

  });
},
}


// banners(){
//     this.cartas.forEach((e)=>{
//         document.querySelector("#secBaners").insertAdjacentHTML("beforeend",`
//         <div class="col-md-6">
//         <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
//           <div class="col p-4 d-flex flex-column position-static " id="cardOne">
//               <strong class="small d-inline-block mb-2 text-danger">${e.strongTitle}</strong>
//               <h3 class="small mb-0">${e.titleCard}</h3>
//               <div class="small dangermb-1 text-muted">${e.subtitle}</div>
//               <p class="small card-text mb-auto">${e.paragraph}</p>
//               <a href="${e.continueLink}" class="stretched-link text-danger">${e.continue}</a> 
//           </div>
//           <div class="col-auto d-none d-lg-block" id="imageOne">
//             <a href="${e.continueLink}}"><img src="${e.image}" width="250px" height="250px"></a>
//           </div>
//         </div>
//       </div>
//     `)});
// }
// }
  