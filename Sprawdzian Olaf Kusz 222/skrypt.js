function oblicznanie(){
    let liczba1=document.getElementById("Wliczba1").value;
    Lbinarna="";
    wynik="";
    while(liczba1>0){
        reszta=liczba1%2
        wynik=wynik+reszta
        liczba1=Math.floor(liczba1/2)


    }
    document.getElementById("wynik").value=wynik;
}