const groupList = ["Rangers", "Raiders", "Wilds", "Canaries", "Bears"];

const personalList = ["Bowie", "Boyd", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Conner", "Connolly", "Fauzaan", "Favour", "Fawaz", "Fawkes", "Connor", "Aayan", "Bracken", "Brad"]

// fonksiyonu cagirdim 
arrayGuncelle(groupList, personalList)


// fonksiyonu olusturuldu
function arrayGuncelle (guncellenecekArray, kullanilacakArray) {
    const guncellenenArray = guncellenecekArray.map((eleman) => {
            let silinecekEleman = kullanilacakArray.splice(Math.floor((Math.random()*kullanilacakArray.length)),1)   
            return eleman + " " + silinecekEleman
        })

    guncellenenArray.forEach((eleman) => {
        console.log(eleman)
    })
}
