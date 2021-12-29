// Bu görevimizde aylik harcamalarini ve maasini bir listeye kaydeden Fikret Beye yardimci olacagiz. 
// Fikret Bey listenin birinci maddesine maasini sonraki maddelere ise giderlerini yaziyor. 
// Ancak bazi maddelerden sonra listeye hatirlama amacli kücük notlar da ekliyor. 
// *Fikret Beyin giderler cikarildiginda aylik ne kadar parasi kaldigini hesaplayan bir programa ihtiyaci var. 
// Ayrica Fikret Beyin calistigi sirket calisanlarin bütcelerine destek olmak amaciyla harcamalarinin 20%sini karsilamaktadir. 
// Programin, Fikret Beyin ne kadar parasinin kaldigini ve sirketin ne kadar destek oldugunu hesaplamasi gerekmektedir.
// Fikret Bey'in Listesi:

const incomeStatement = [15000, 2000, 1000, 300, 200, "important electronic", 600, 79, "abo", 342, "printer", 450, 32, 45, "fitness", 64, 10, 23, 12, 2, 56, 7];


// giderler cikarildiginda aylik ne kadar parasi kaldigini bulalim
const kalanPara = incomeStatement
    .filter(income => typeof income =="number") // ilk once array icindeki notlari ayiklayalim
    .reduce((income,expenses) => income - expenses);// Toplam gelirden giderleri cikaralim

console.log("kalan para :" + kalanPara);


// Toplam ne kadar gider oldugunu bulalim
const giderler = incomeStatement
    .filter(income => typeof income =="number")
    .slice(1)                                     // dizideki ilk elamandan sonraki elamanlari alalim
    .reduce((total,expenses) => total + expenses);  // bunlari toplayarak giderleri bulalim

console.log("Toplam giderler:" + giderler);


//sirketin ne kadar destek oldugunu hesaplayalim
const butceDestek = giderler * .20;
console.log("Toplam butce destek:" + butceDestek);
