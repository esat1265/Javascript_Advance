// SIRAYLA; "Monkey", "Cock", "Dog", "Boar", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"

// Cin astrolojisinde burclar ayni zamanda elementler ile ifade edilir. Elementler iki yilda bir degisir. SIRAYLA bu elementler : Metal, Water, Wood, Fire, Earth.

// Örneğin; 1983 ya da 1995 doğumlular Çin Astrolojisi’ne göre Domuz burcu olabilir, ama her iki yılı temsil eden element farklıdır. 
//Çünkü her yıl beş dönüşümün kuralına uyarak farklı elementleri simgeler. 
//Dolayısıyla birinin yılı Water elementini temsil ederken, 1984 biri ise Wood elementini temsil eder.

// Examples:
// sexagenary(1971) ➞ "Metal Pig".


const branch = ["Monkey", "Cock", "Dog", "Boar", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"]; 
const stam = ["Metal", "Metal", "Water", "Water", "Wood", "Wood", "Fire", "Fire", "Earth", "Earth"];

//Programi basit ve kolay hale getirmek ve bolumde kalani dogrudan arraydan almak icin, stam arrayini IKI DEFA yazdim. 
//DOM dan tarih ve tikla butonuna ulasiyoruz
let tikla = document.querySelector("#tikla");

let burcBul = addEventListener("click",(tikla)=>{

    let year = document.querySelector("#birthday").value;
    
    let indexOfBranch = year % 12; //girilen tarihin 12 ve 10 ile bolumlerinden kalanini bulup degiskenlere atiyoruz.
    let indexOfStam = year % 10;

    console.log("sexagenary","(",year,")=>",stam[indexOfStam], branch[indexOfBranch])    // kalan sonuc array uzerindeki index numarasi oldugundan konsola yazdiriyoruz
});




//========================================================
// Ikinci bir cozum
//===========================================================

/*

const branch = ["Monkey", "Cock", "Dog", "Boar", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"]; 
const stam = ["Metal", "Water", "Wood", "Fire", "Earth"];

//Burada eger stam arrayini normal alirsak birkac if-else ile cozume ulasabiliriz

let tikla = document.querySelector("#tikla");

let burcBul = addEventListener("click",(tikla)=>{

  let year = document.querySelector("#birthday").value;
    
  let indexOfBranch = year % 12;
  let indexOfStam = year % 10;

  if(p==0 || p==1){
    console.log("sexagenary","(",year,")=>", stam[0], branch[indexOfBranch]);
  }else if(p==2 || p==3){
    console.log("sexagenary","(",year,")=>",stam[1], branch[indexOfBranch]);
  }else if(p==4 || p==5){
    console.log("sexagenary","(",year,")=>",stam[2], branch[indexOfBranch]);
  }else if(p==6 || p==7){
    console.log("sexagenary","(",year,")=>",stam[3], branch[indexOfBranch]);
  }else{
    console.log("sexagenary","(",year,")=>",stam[4], branch[indexOfBranch]);
  };   
});

*/

