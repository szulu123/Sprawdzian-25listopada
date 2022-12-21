const formularz=document.querySelector("form");
const marka=formularz.querySelector("input[name=wejscie11]");
const model=formularz.querySelector("input[name=wejscie22]");
const numerre=formularz.querySelector("input[name=wejscie33]");
const dane4=formularz.querySelector("paliwo");
let rodzaj=document.getElementById("Rodzaj paliwa").value;


formularz.addEventListener("submit", e => {
    e.preventDefault();
    alert("Marka: "+marka.value+" Model: "+model.value+" Numer rejestracyjny: "+numerre.value);
    if(rodzaj=="benzyna"){
        alert("Rodzaj paliwka to benzyna")
    }
} );