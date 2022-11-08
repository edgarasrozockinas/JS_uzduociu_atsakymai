/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


function Calculator() {


    this.sum = function(a, b) {

        return Number(a) + Number(b);
    }
    this.substraction = function(a, b) {

        return Number(a) - Number(b);
    }

    this.multiplication = function(a, b) {

        return Number(a) * Number(b);
    }

    this.division = function(a, b) {

        return Number(a) / Number(b);
    }

    
} 


let newObj = new Calculator();

console.log(newObj);
console.log(newObj.sum(1,2));
console.log(newObj.substraction(1,"3"));
console.log(newObj.multiplication(1,"0"));
console.log(newObj.division(10,"2"));

