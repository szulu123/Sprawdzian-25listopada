function obliczanie(){
    let a=document.getElementById("liczba1").value;
    let an=document.getElementById("liczba2").value;
    let n=document.getElementById("liczba3").value;
    wynik=(an-a)/(n-1);
    document.getElementById("wynik").value="roznica ciagu"+wynik;

}