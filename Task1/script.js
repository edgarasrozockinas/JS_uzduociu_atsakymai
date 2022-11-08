/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
document.querySelector("#submit-btn").addEventListener("click", (e)=> {
    
    e.preventDefault();
    let inputNumber = Number(document.querySelector("#search").value);
    showWeight(inputNumber);

});

function showWeight(number) {
    document.querySelector("#output").innerHTML = null;
    let resG = number * 1000;
    let resLb = number * 2.2046;
    let resOz = number * 35.274; 

    let listElementG = document.createElement("li");
    listElementG.innerHTML = `${number}`+"kg = " + resG +"g";
    listElementG.setAttribute("class", "result")

    let listElementLb = document.createElement("li");
    listElementLb.innerHTML= `${number}`+"kg = " + resLb + "lb";
    listElementLb.setAttribute("class", "result")

    let listElementOz = document.createElement("li");
    listElementOz.innerHTML = `${number}`+"kg = " + resOz + "oz";
    listElementOz.setAttribute("class", "result")

    let listElementOl = document.createElement("ul");
    listElementOl.appendChild(listElementG);
    listElementOl.appendChild(listElementLb);
    listElementOl.appendChild(listElementOz);

    document.querySelector("#output").appendChild(listElementOl);

}