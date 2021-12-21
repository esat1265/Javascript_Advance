// oncelikle hayvanlarin oldugu bir array olusturacagiz
// verilen array uzerinde gezinip kullanilabilir hayvanlari tespit edecegiz
// bu hayvanlarin bacak sayilarini hesaplayip konsola yazdiracagiz


const animals = ["inek","domuz","inek","domuz","tavuk","inek","inek","tavuk"];

//kullanilabilir hayvanlari listeleyecegiz
let kullanilabilirHayvan = animals.filter(function(animal){
     return animal==="inek"||animal==="tavuk";
 });

console.log(kullanilabilirHayvan);

let ayakSayisi=0;
// listelenen hayvanlara gore ayak sayilarini hesaplayacagiz.
animals.forEach((item,index)=>{
    if (item==="inek") {
        ayakSayisi=ayakSayisi+4;
    }else if(item==="tavuk"){
        ayakSayisi=ayakSayisi+2;
    }
});

console.log(ayakSayisi);



//==============================================================================
//Farkli bir metodla cozumu
//==============================================================================

// const animals = ["inek","domuz","inek","domuz","tavuk","inek","inek","tavuk"];

// let ayakSayisi=0;

// animals.forEach(myFunction);
// console.log(ayakSayisi);

// function myFunction(animal){
//     if (animal === "inek") {
//          ayakSayisi = ayakSayisi + 4 ; 
//     }else if (animal === "tavuk") {
//         ayakSayisi = ayakSayisi + 2;
//     }
// };
