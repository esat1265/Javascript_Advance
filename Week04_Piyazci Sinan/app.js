// 1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
// 2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
// 3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
// 4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
// 5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
// 6) Toplam balik stoku ne kadardir?
// 7) En pahali olan balik hangisidir?
// 8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
// 9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
// 10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
// 11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?


// 1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?

const stokMiktari = fishFarm
    .filter(index => index.stockVolumeInKg > 500)
    .map(index => index.fishType);

console.log(`Stok miktari 500 kg uzerinde olan baliklar: ${stokMiktari}`);

// 2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?

const fiyatDokuzOnikiArasi = fishFarm
    .filter(index => index.price > 9 && index.price < 12)
    .map(index => index.fishType);

console.log(`Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar: ${fiyatDokuzOnikiArasi}`);

// 3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?

const bernKisSezonuBaliklari = fishFarm
    .filter(index => index.season === "Winter")
    .filter(index => index.saleLocations.includes("BE"))
    .map(index => index.fishType);

console.log(`Sadece Bern'de ve kis sezonu satilan baliklar: ${bernKisSezonuBaliklari}`);

// 4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)

const sonKullanmaTarihineGore = fishFarm
    .sort((a,b) => a.entryDate - b.entryDate);

console.log(sonKullanmaTarihineGore);


// 5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
const OndanDusuk = fishFarm.filter(index => index.price < 10);
const ulkeler = OndanDusuk.map(index => index.originCountry);
const AvrupadaOlanUlkeler = ulkeler.filter(index => EuroUnion.includes(index));//EuroUnion arrayi data bolumunde

const ondanDusukVeAvrupadaGelenBaliklar = fishFarm
    .filter(index => index.originCountry === AvrupadaOlanUlkeler.toString())
    .map(index => index.fishType);

console.log(ondanDusukVeAvrupadaGelenBaliklar);


// 6) Toplam balik stoku ne kadardir?

const toplamBalikStoku = fishFarm
    .map(index => index.stockVolumeInKg)
    .reduce((total, index) => total + index);

    console.log(toplamBalikStoku);


// 7) En pahali olan balik hangisidir?

const balikFiyatlari = fishFarm
    .map(index => index.price)
    .sort((a,b) => a - b);

const enPahaliBalik = balikFiyatlari[balikFiyatlari.length - 1];

const enPahaliBalikIsmi = fishFarm
    .filter(index => index.price == enPahaliBalik )
    .map(index => index.fishType);

console.log(enPahaliBalikIsmi);
 

// 8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?


const enUzunSure = fishFarm
    .map(index => index.durationInDays)
    .reduce((a,b) => Math.max(a,b))

const enUzunDuranbalik = fishFarm
    .filter(index => index.durationInDays == enUzunSure)
    .map(index => index.fishType);

console.log(enUzunDuranbalik);


// 9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
