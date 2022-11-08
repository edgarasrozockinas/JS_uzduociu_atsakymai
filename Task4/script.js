/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

async function loadCars() {
    let responseData = await fetch(ENDPOINT);
    let carsData = await responseData.json();
    console.log(carsData);



    carsData.forEach(element => {
        let newParagraph = document.createElement("p");
        newParagraph.setAttribute("class", "par");
        newParagraph.innerHTML = `<strong>${element.brand}</strong>` +": "+ element.models;
        document.querySelector("#output").appendChild(newParagraph);
    });
}

loadCars();