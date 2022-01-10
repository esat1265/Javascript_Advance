// 1. Maasi 5000'in üzerinde olan ailelerin listesi. Listede aile babasinin isimleri ve soy isimleri isim sirasina göre listelenmeli.
// 2. Toplam erkek cocuklarin sayisi. Cocuklarin listesi isim sirasina göre siralanmali.
// 3. Toplam kiz cocuklarin sayisi. Cocuklarin listesi isim sirasina göre siralanmali.
// 4. Yasi 8'den kücük cocuklarin sayisi. Cocuklar yaslarina göre büyükten kücüge göre siralanmali.
// 5. Yasi 8'den büyük cocuklarin annelerinin isimlerinin isim sirasina göre listelenmeli.
// const item_name = data.items[1].name;
const families = [
    {
       firstname: "Ahmet",
       lastname: "Kurnaz",
       partner: "Sevil",
       childrens: [
          {
             name: "Efe",
             age: 8,
             gender: "boy",
          },
          {
             name: "Ece",
             age: 6,
             gender: "girl",
          },
       ],
       salary: 4000,
    },
    {
       firstname: "Kemal",
       lastname: "Can",
       partner: "Elif",
       childrens: [
          {
             name: "Naz",
             age: 11,
             gender: "girl",
          },
          {
             name: "Kadir",
             age: 6,
             gender: "boy",
          },
       ],
       salary: 6000,
    },
    {
       firstname: "Zakir",
       lastname: "Cemal",
       partner: "Nida",
       childrens: [
          {
             name: "Hasan",
             age: 2,
             gender: "boy",
          },
          {
             name: "Hüseyin",
             age: 6,
             gender: "boy",
          },
       ],
       salary: 5500,
    },
    {
       firstname: "Murat",
       lastname: "Demirtas",
       partner: "Simay",
       childrens: [
          {
             name: "Oktay",
             age: 15,
             gender: "boy",
          },
          {
             name: "Gülsüm",
             age: 13,
             gender: "girl",
          },
       ],
       salary: 5300,
    },
    {
       firstname: "Umut",
       lastname: "Ilicak",
       partner: "Ayse",
       childrens: [
          {
             name: "Bilal",
             age: 8,
             gender: "boy",
          },
       ],
       salary: 3000,
    },
    {
       firstname: "Durmus",
       lastname: "Demir",
       partner: "Nur",
       childrens: [
          {
             name: "Meral",
             age: 4,
             gender: "girl",
          },
       ],
       salary: 7000,
    },
 ];

// 1. Maasi 5000'in üzerinde olan ailelerin listesi. Listede aile babasinin isimleri ve soy isimleri isim sirasina göre listelenmeli. 

const salaryOver5000 = families
.filter(index => index.salary > 5000)
.map(index => index.firstname + " " + index.lastname)
.sort();
    
console.log(salaryOver5000);


// 2. Toplam erkek cocuklarin sayisi. Cocuklarin listesi isim sirasina göre siralanmali.

function boy(pArr) {
   let sum = 0;
   let boyName = [];
   for (let index = 0; index < pArr.length; index++) {
      if(pArr[index].gender==="boy"){
         sum=sum+1 ; boyName.push(pArr[index].name)} ; 
}
return sum + boyName
};

let boyAllNames =[];
for (let index = 0; index < families.length; index++) {
   boyAllNames.push(boy(families[index].childrens)); 
}
console.log(boyAllNames);

// 3. Toplam kiz cocuklarin sayisi. Cocuklarin listesi isim sirasina göre siralanmali.

function girl(pArr) {
   let sum = 0;
   let girlName = [];
   for (let index = 0; index < pArr.length; index++) {
      if(pArr[index].gender==="girl"){
         sum=sum+1 ; girlName.push(pArr[index].name)} ; 
}
return sum + girlName
};

let girlAllNames =[];
for (let index = 0; index < families.length; index++) {
   girlAllNames.push(girl(families[index].childrens)); 
}
console.log(girlAllNames);

// 4. Yasi 8'den kücük cocuklarin sayisi. Cocuklar yaslarina göre büyükten kücüge göre siralanmali.

function age(pArr) {
   let sum = 0;
   let girlName = [];
   for (let index = 0; index < pArr.length; index++) {
      if(pArr[index].age < 8){
         sum=sum+1 ; girlName.push(pArr[index].name)} ; 
}
return sum + girlName
};

let ageUnder8 =[];
for (let index = 0; index < families.length; index++) {
   ageUnder8.push(age(families[index].childrens)); 
}
console.log(ageUnder8);

// 5. Yasi 8'den büyük cocuklarin annelerinin isimlerinin isim sirasina göre listelenmeli.
 // uzerinde biraz daha calis
function ages(pArr) {
   let sum = 0;
   let girlName = [];
   for (let index = 0; index < pArr.length; index++) {
      if(pArr[index].age > 8){
         sum=sum+1 ; girlName.push(families[index].partner)} ; 
}
return sum + girlName
};

let ageOver8 =[];
for (let index = 0; index < families.length; index++) {
   ageOver8.push(ages(families[index].childrens)); 
}
console.log(ageOver8);