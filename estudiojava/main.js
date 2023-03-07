let tabla=[    
    {traditional:"90-100",pointRange:"12-14",letter:"A",SBGRating:4,ProficiencyLevel:"exceeds profienciency"},
    {traditional:"80-89",pointRange:"9-11",letter:"B",SBGRating:3,ProficiencyLevel:"Demonstrates proficiency"},
    {traditional:"70-79",pointRange:"6-8",letter:"C",SBGRating:2,ProficiencyLevel:"approaches profienciency"},
    {traditional:"60-69",pointRange:"3-5",letter:"D",SBGRating:1,ProficiencyLevel:"falls well below profienciency"},
    {traditional:"<60",pointRange:"1-2",letter:"E",SBGRating:0,ProficiencyLevel:"lacks all profienciency"},
    {traditional:"0",pointRange:"0",letter:"F",SBGRating:0,ProficiencyLevel:"no attempt made"}
];

console.table(tabla,[`traditional`,`pointRange`,`letter`,`SBGRating`,`ProficiencyLevel`])

 let nota=prompt("ingresa tu nota")

 if(nota >= 90 && nota<=100){
    console.log(`¡EXELENTE!, tus datos fueron los siguientes:\n
    calificacion:\tA\n
    ranking:\t\t4\n
    exceeds profienciency`)
 } else if (nota >= 80 && nota<=89){
    console.log(`¡VAMOOOSS!, tus datos fueron los siguientes:\n
    calificacion:\tB\n
    ranking:\t\t3\n
    Demonstrates proficiency`)
 }else if(nota >= 70 && nota<=79){
    console.log(`BIEN, tus datos fueron los siguientes:\n
    calificacion:\tC\n
    ranking:\t\t2\n
    approaches profienciency`)
 }else if(nota >= 60 && nota<=69){
    console.log(`DALE TU PUEDES, tus datos fueron los siguientes:\n
    calificacion:\tD\n
    ranking:\t\t1\n
    falls well below profienciency`)
 }else if(nota > 0 && nota<60){
    console.log(`ESFORZATE, tus datos fueron los siguientes:\n
    calificacion:\tE\n
    ranking:\t\t0\n
    no attempt made`)
 }else if(nota=0){
    console.log(`PENDEJO, tus datos fueron los siguientes:\n
    calificacion:\tF\n
    ranking:\t\t0\n
    exceeds profienciency`)
 }else{
    console.log("digita un valor de 1 a 100")
 }

 
// switch(nota){
//     case nota >= 90 && nota<=100:
//         console.log(`¡EXELENTE!, tus datos fueron los siguientes:\n
//         calificacion:\tA\n
//         ranking:\t4\n
//         exceeds profienciency`)
//     break;
//     case nota >= 80 && nota<=89:
//         console.log(`¡VAMOOOSS!, tus datos fueron los siguientes:\n
//         calificacion:\tB\n
//         ranking:\t3\n
//         Demonstrates proficiency`)
//     break;
//     case nota >= 70 && nota<=79:
//         console.log(`BIEN, tus datos fueron los siguientes:\n
//         calificacion:\tC\n
//         ranking:\t2\n
//         approaches profienciency`)
//     break;
//     case nota >= 60 && nota<=69:
//         console.log(`DALE TU PUEDES, tus datos fueron los siguientes:\n
//         calificacion:\tD\n
//         ranking:\t1\n
//         falls well below profienciency`)
//     break;
//     case nota > 0 && nota<60:
//         console.log(`ESFORZATE, tus datos fueron los siguientes:\n
//         calificacion:\tE\n
//         ranking:\t0\n
//         no attempt made`)
//     break;
//     case 0:
//         console.log(`PENDEJO, tus datos fueron los siguientes:\n
//         calificacion:\tF\n
//         ranking:\t0\n
//         exceeds profienciency`)
//     break;
// }

