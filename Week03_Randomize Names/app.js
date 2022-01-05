
//Program her calistirildiginda personel listesinden karisik olarak 5 isim sececek 
//ve bu isimleri grup listesinde bulunan gruplara yerlestirecektir.

const groupList = ["Rangers", "Raiders", "Wilds", "Canaries", "Bears"];

const personalList = ["Bowie", "Boyd", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Conner", "Connolly", "Fauzaan", "Favour", "Fawaz", "Fawkes", "Connor", "Aayan", "Bracken", "Brad"];


let list = document.getElementById('group-list'); 
  
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
    list.innerHTML += `${groupList[index]}  ${personalList[index]} <br>`;
  }
} 
