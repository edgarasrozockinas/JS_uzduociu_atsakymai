/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {

    constructor(title, director, budget) {
        this.title = title.toString();
        this.director = director.toString();
        this.budget = Number(budget);
    }

    wasExpensive() {
        if(this.budget > 100000000) {
            return true;
        }
        else {
            return false;
        }
    }

}

let newMovie1 = new Movie("Baisus Filmas", "Kazkoks Noname'as", 1000);
console.log(newMovie1);
console.log(newMovie1.wasExpensive());