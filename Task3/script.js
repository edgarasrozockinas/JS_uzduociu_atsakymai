/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector("#btn").addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector("#message").innerHTML = null;
    readGithubUsers();
})

async function readGithubUsers() {
    let responseData = await fetch(ENDPOINT);
    let userData = await responseData.json();
    console.log(userData);
    userData.forEach(element => {
        let newLine = document.createElement("p");

        newLine.innerHTML = `<strong>${element.login}</strong>` + " " + element.avatar_url;
        
        document.querySelector("#output").appendChild(newLine);


    });
    document.querySelector("#output").style.backgroundColor = "rgb(83, 130, 164)";
}

