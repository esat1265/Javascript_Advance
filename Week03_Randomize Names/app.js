
//Program her calistirildiginda personel listesinden karisik olarak 5 isim sececek 
//ve bu isimleri grup listesinde bulunan gruplara yerlestirecektir.

const groupList = ["Rangers", "Raiders", "Wilds", "Canaries", "Bears"];

const personalList = ["Bowie", "Boyd", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Conner", "Connolly", "Fauzaan", "Favour", "Fawaz", "Fawkes", "Connor", "Aayan", "Bracken", "Brad"];


let list = document.getElementById('group-list'); // DOM'a ulasip sonucu yazacagimiz kismi aldik

// Fonksiyon her tiklandiginda arraylari karisik sirayla tekrar dizelim(ilk 2 for dongusu her bir array icin bunu yapacak)
// Son for dongusu ise karisik dizilen arraylarin ilk 5 elemanini alip yazdiracak.
// Boylece her tiklandiginda isimler karisik olarak siralanaca ve listelenecek

function listGroup() {
    let i, j, k;
  for (i = groupList.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = groupList[i]
    groupList[i] = groupList[j]
    groupList[j] = k
  }

  for (i = personalList.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = personalList[i]
    personalList[i] = personalList[j]
    personalList[j] = k
  }

  for(index=0; index<5; index++) {
    list.innerHTML += `${index+1}  ${groupList[index]}  ${personalList[index]} <br>`;
  }
} 
