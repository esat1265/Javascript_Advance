// 1. Parca isimleri büyük harflere cevrilecektir.
// 2. Parca isimlerinden sayilar cikartilacaktir.
// 3. Parca isimleri tersine cevrilecektir.
// 4. Her parcanin basina KEREMAG_ eklenecektir.
// 5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)

// Kriterler:
// 0. Program akis adimlarinin, programin baslagicinda maddeler halinde yazilmasi (analiz) [-20].
// 1. Programin duzgun calisiyor olmasi [-20]
// 2. Algoritmanin dogru kurilmasi [-10]
// 3. Programlarin fonksiyon ile olusturulmasi [-20]
// 4. Programinin hizalamalarinin duzgun olmasi [-10]

const parcalar = ["Kaporta5", "Ak3ü", "Stop Lambasi", "Radyatör 21", "Karbüratör 42", "Tekerlek", "3 AYNA", "Jant"];

console.log(parcalar);

// array uzerinde gezinip her bir string i buyuk harfe cevirelim
function toUpperCase() { 
  
    let upperText = parcalar.map((item,index)=>{
        return item.toUpperCase();
    });
    console.log(upperText);
}
toUpperCase();

// array uzerinde gezinip her bir stringi ters ceviriyoruz
function toReverse() { 
    let reverseText = parcalar.map((item,index)=>{
        return item.split("").reverse().join("");
    });
    console.log(reverseText);
}
toReverse();


//bir arrayin elamanlarini tarayip numara olanlari tespit edelim
//daha sonra numara haric diger elemanlari birlestirelim
//bir tek array icin yaptigimiz bu uygulamayi daha sonra herbir array icin uyuglayalim
const text = ["K", "a","p","o","r","t","a",5];
console.log(text);

const sayiAyikla = [];
 for (let index = 0; index < text.length; index++) {
    
    if (typeof text[index]==="number") {
         continue;
         }
         sayiAyikla.push(text[index]);  
 };
 console.log(sayiAyikla.join(""));


//parcalar arrayini harf harf ayirip arraylar elde edelim
let deleteNumberArray = parcalar.map((item,index)=>{
     return item.split("");
});
console.log(deleteNumberArray);

