/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let clickCountNumber = 0;

document.querySelector("#btn__element").addEventListener("click", (e)=> {
    e.preventDefault();
    clickCountNumber = clickCountNumber + 1;
    document.querySelector("#btn__state").innerHTML = clickCountNumber;
    
})