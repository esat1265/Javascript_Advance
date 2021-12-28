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

//==============================================================================
//Daha farkli bir metodla cozumu
//==============================================================================


/**
Analiz:
 - start
 - Verilen bir hayvan arrayi var
 - Necip usta, kendisine uygun hayvanlarin bacak sayisini istiyor
 --> Tavuk hesaplamaya sokulmayacak, cünkü lezzetli corba cikmiyor.
 --> Domuz hesapmalaya sokulmayacak
 --> Tavuk(2), Inek(4), Domuz(4), Koyun(4)
 - Yukarida belirlenen kurallara göre hesaplama yapilacak
 - Bulunan bacak sayisi ekrana basilacak
 - fin!
 */

/*
 // constants
 const NUMBER_OF_LEG_COW = 4;
 const NUMBER_OF_LEG_SHEEP = 4;
 
 const ANIMAL_COW = "INEK";
 const ANIMAL_SHEEP = "KOYUN";
 const ANIMAL_CHICKEN = "TAVUK";
 const ANIMAL_PIG = "DOMUZ";
 
 // User entered animal list
 const animalList = [
     "inek", "Domuz", "TaVuk", "kOYun", "koyUN", 
     "INek", "Inek", "DOMUZ", "tavuk", "IneK"
 ];
 
 // helper functions, arrow functions
 const toUpperCase = (animal) => animal.toUpperCase();
 
 const removeUnwantedAnimals = (animal) => animal !== ANIMAL_CHICKEN && animal !== ANIMAL_PIG;
 
 const findTotalAmount = (totalLegs, animal) => {
                             if(animal === ANIMAL_COW){
                                 totalLegs += NUMBER_OF_LEG_COW;
                             }else if(animal === ANIMAL_SHEEP){
                                 totalLegs += NUMBER_OF_LEG_SHEEP;
                             }
                             return totalLegs;
                         }
 
 // main function
 function getCurrentTotalAmountOfLegs(pAnimalList){
     const totalAmountOfLegs = 
         pAnimalList
             .map(toUpperCase)
             .filter(removeUnwantedAnimals)
             .reduce(findTotalAmount, 0);
     
     return totalAmountOfLegs;
 }
 
 console.log("Total amount of legs is ", getCurrentTotalAmountOfLegs(animalList));
 */