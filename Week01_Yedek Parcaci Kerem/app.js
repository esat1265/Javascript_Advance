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

const removeNumbers = parcalar.map((item)=>{
    return item.replace(/[1-9]/g, "")
});

console.log(removeNumbers);

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


/* Code riview dersi calismasi
/*
Oto yedek parca isi yapan Kerem Bey, toptancilardan aldigi yedek parcalari, kendi envanterine kendi sistemi ile kaydedip, bu parcalari depoya yerlestirirken bir takim süreclerden gecirmek istemektir. Bu süreclerin her biri bir fonksiyon olarak tanimlanacaktir.
Araba parcalari ise bir array icinde verilecektir.

örnek array: ["Kaporta5", "Ak3ü",  "Stop Lambasi", "Radyatör 21", "Karbüratör 42", "Tekerlek", "3 AYNA", "Jant"]
Kerem Bey'in istedigi program, asagiaki durumlari karsilamasi gerekmektedir.

Analiz
-1. start
0. Array verilmis
1. Parca isimleri büyük harflere cevrilecektir.
2. Parca isimlerinden sayilar cikartilacaktir.
3. Parca isimleri tersine cevrilecektir.
4. Her parcanin basina KEREMAG_ eklenecektir.
5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)
6. finish
*/
/*
// constants
const PREFIX_KEREMAG = "KEREMAG_";
const EMPTY_STRING = "";
const REGEX_NUMBERS = /[1-9]/g;
const REGEX_LETTERS = /[a-zA-Z]/g;

// helper functions
const convertToUppercase = (parca) => parca.toUpperCase();
const removeNumbersFromSparePart = (parca) => parca.replace(REGEX_NUMBERS, EMPTY_STRING)
const getCurrentDate = () => {
    let dt = new Date();
    return dt.getDate() + 
        "/" + (dt.getMonth() + 1) +
        "/" + dt.getFullYear() +
        " " + dt.getHours() +
        ":" + dt.getMinutes();
}

// User data
const yedekParcaListesi = ["Kaporta5", "Ak3ü",  "Stop Lambasi", "Radyatör 21", "Karbüratör 42", "Tekerlek", "3 AYNA", "Jant"]

// main function
function processSpareParts(pSpacePartList){
    const result = 
        pSpacePartList
            .map(convertToUppercase)
            .map(removeNumbersFromSparePart)
            .map((parca) => parca.trim())
            .map((parca) => parca.split(EMPTY_STRING).reverse().join(EMPTY_STRING))
            .map((parca) => PREFIX_KEREMAG.concat(parca))
            .map((parca) => parca + getCurrentDate());
    
    return result;
}

const processResult = processSpareParts(yedekParcaListesi)
console.log("The processed list: ", processResult);
*/