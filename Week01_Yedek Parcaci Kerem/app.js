// 1. Parca isimleri büyük harflere cevrilecektir.
// 2. Parca isimlerinden sayilar cikartilacaktir.
// 3. Parca isimleri tersine cevrilecektir.
// 4. Her parcanin basina KEREMAG_ eklenecektir.
// 5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)


const parcalar = ["Kaporta5", "Ak3ü", "Stop Lambasi", "Radyatör 21", "Karbüratör 42", "Tekerlek", "3 AYNA", "Jant"];

console.log(parcalar);



// 1. Parca isimleri büyük harflere cevrilecektir.
// array uzerinde gezinip her bir string i buyuk harfe cevirelim
function toUpperCase() { 
  
    let upperText = parcalar.map((item,index)=>{
        return item.toUpperCase();
    });
    console.log(upperText);
}
toUpperCase();



// 2. Parca isimlerinden sayilar cikartilacaktir.

//parcalar arrayini harf harf ayirip arraylar elde edelim  
let deleteNumberArray = parcalar.map((item)=>{
        return item.split("");
});

//bir arrayin elamanlarini tarayip numara olanlari tespit edelim
//daha sonra numara haric diger elemanlari birlestirelim
//bir tek array icin yaptigimiz bu uygulamayi daha sonra herbir array icin uyuglayalim

for (let index = 0; index < parcalar.length; index++) {
    const text = deleteNumberArray[index];
console.log(text);

const sayiAyikla = [];
 for (let index = 0; index < text.length; index++) {
    
    if (typeof text[index]==="number") {
         continue;
         }
         sayiAyikla.push(text[index]);  
 };
 console.log(sayiAyikla.join(""));   
}


// 3. Parca isimleri tersine cevrilecektir.
// array uzerinde gezinip her bir stringi ters ceviriyoruz
function toReverse() { 
    let reverseText = parcalar.map((item,index)=>{
        return item.split("").reverse().join("");
    });
    console.log(reverseText);
}
toReverse();



// 4. Her parcanin basina KEREMAG_ eklenecektir.
//replace yontemi ile her elemenin uzerine KEREMAG_ eklenerek yerleeri degistirildi
let addKerem = parcalar.map((item,index)=>{
    return item.replace(parcalar[index], "KEREMAG_"+parcalar[index]);
});
console.log(addKerem);


// 5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)
let date = parcalar.map((item,index)=>{
    return item.replace(parcalar[index],parcalar[index] + new Date());
});
console.log(date);
