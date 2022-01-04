
//Program her calistirildiginda personel listesinden karisik olarak 5 isim sececek 
//ve bu isimleri grup listesinde bulunan gruplara yerlestirecektir.

const groupList = ["Rangers", "Raiders", "Wilds", "Canaries", "Bears"];

const personalList = ["Bowie", "Boyd", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Conner", "Connolly", "Fauzaan", "Favour", "Fawaz", "Fawkes", "Connor", "Aayan", "Bracken", "Brad"];


let list = document.getElementById('group-list'); 
  
function listGroup() {
    list.innerHTML = 
    personalList[Math.floor(Math.random() * personalList.length)];
    groupList[Math.floor(Math.random() * groupList.length)];
    
} 