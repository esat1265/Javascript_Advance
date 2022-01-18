
/**
 * ANALIZ
 * 1- Oncelikle bos bir array aliriz.
 * 2- Iki fonksiyon tanimlariz ve bu fonksiyolar buttonlara tiklandiginda arrayin icine eleman ekleyen ve cikaran fonksiyonlar olsun
 * 3- Ana fonksiyon ile arrayin uzunluguna gore kodumuzu sayfaya render edelim
 */


/**
 * DOM
 */

const loadButton = document.querySelector("#load");
const unloadButton = document.querySelector("#unload");
const battery = document.querySelector("#battery");



// Bos arrayimiz
let loadArray = [];


// Doldur Butonuna basildiginda arraya bir eleman eklesin.
loadButton.addEventListener("click", function () { 
    let length = loadArray.length;

    if (length < 3) {
        loadArray.push("1");
    }else{
        return loadArray; 
    }
    renderBattery(loadArray);
});

// Bosalt Butonuna basildiginda arrayden bir eleman silsin.

unloadButton.addEventListener("click", function () { 
    let length = loadArray.length;

    if (length !== 0) {
        loadArray.pop("1");
    }else{
        return loadArray;
    }
    renderBattery(loadArray);   
});


// Ana fonksiyon ile arrayin uzunluguna gore kodu render edelim.
function renderBattery(pArray) {
    if (pArray.length == 0) {
        battery.innerHTML = `
        <div class="bg-dark m-auto col-1 p-1 border"></div>
        <div  class="m-auto col-6 p-4 border border-dark"></div>
        <div  class=" m-auto col-6 p-4 border border-dark"></div>
        <div  class=" m-auto col-6 p-4 border border-dark"></div>
        <h4 class="ms-5 ps-4 mt-2 col-6">0%</h4>` ;
    } else if(pArray.length == 1) {
        battery.innerHTML = `
        <div class="bg-dark m-auto col-1 p-1 border"></div>
        <div  class=" m-auto col-6 p-4 border border-dark"></div>
        <div  class=" m-auto col-6 p-4 border border-dark"></div>
        <div  class="bg-danger m-auto col-6 p-4 border border-dark"></div>
        <h4 class="ms-5 ps-4 mt-2 col-6">33%</h4>` ;
    }else if (pArray.length == 2) {
        battery.innerHTML = `
        <div class="bg-dark m-auto col-1 p-1 border"></div>
        <div  class=" m-auto col-6 p-4 border border-dark"></div>
        <div  class="bg-warning m-auto col-6 p-4 border border-dark"></div>
        <div  class="bg-warning m-auto col-6 p-4 border border-dark"></div>
        <h4 class="ms-5 ps-4 mt-2 col-6">66%</h4>`; 
    } else {
       battery.innerHTML = `
        <div class="bg-dark m-auto col-1 p-1 border"></div>
        <div  class="bg-success m-auto col-6 p-4 border border-dark"></div>
        <div  class="bg-success m-auto col-6 p-4 border border-dark"></div>
        <div  class="bg-success m-auto col-6 p-4 border border-dark"></div>
        <h4 class="ms-5 ps-4 mt-2 col-6">100%</h4>` ;
    } 
 };
