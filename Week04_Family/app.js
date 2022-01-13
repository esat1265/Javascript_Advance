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

const newChildrenArray = families.map(index=>index.childrens).flat();
console.log(newChildrenArray);

// 2. Toplam erkek cocuklarin sayisi. Cocuklarin listesi isim sirasina göre siralanmali.

const toplamErkekCocuklarSayisi = newChildrenArray.filter(index => index.gender==="boy").length;
console.log(toplamErkekCocuklarSayisi);

const erkekCocuklarListesi = newChildrenArray.filter(index => index.gender==="boy").sort((a, b)=>{ 
   let nameA = a.name.toUpperCase();
   let nameB = b.name.toUpperCase();
   if (nameA < nameB) {
     return -1;
   };
   if (nameA > nameB) {
     return 1;
   } return 0;
});
console.log(erkekCocuklarListesi);

// 3. Toplam kiz cocuklarin sayisi. Cocuklarin listesi isim sirasina göre siralanmali.

const toplamKizCocuklarSayisi = newChildrenArray.filter(index => index.gender==="girl").length;
console.log(toplamKizCocuklarSayisi);

const kizCocuklarListesi = newChildrenArray.filter(index => index.gender==="girl").sort((a, b)=>{ 
   let nameA = a.name.toUpperCase();
   let nameB = b.name.toUpperCase();
   if (nameA < nameB) {
     return -1;
   };
   if (nameA > nameB) {
     return 1;
   } return 0;
});
console.log(kizCocuklarListesi);


// 4. Yasi 8'den kücük cocuklarin sayisi. Cocuklar yaslarina göre büyükten kücüge göre siralanmali.


const yasiSekizdenKucukCocuklarSayisi = newChildrenArray.filter(index => index.age < 8 ).length;
console.log(yasiSekizdenKucukCocuklarSayisi);

const yasiSekizdenKucukCocuklar = newChildrenArray.filter(index => index.age < 8 ).sort((a,b) => a.age-b.age
);
console.log(yasiSekizdenKucukCocuklar);


// 5. Yasi 8'den büyük cocuklarin annelerinin isimlerinin isim sirasina göre listelenmeli.

//Biraz daha calisilmali
const yasiSekizdenBuyukCocuklar = newChildrenArray.filter(index => index.age > 8 );
console.log(yasiSekizdenBuyukCocuklar);

const anneler = families
.map(index=>index.partner)
.filter(index=>index == newChildrenArray.filter(index => index.age > 8 ));

console.log(anneler);


