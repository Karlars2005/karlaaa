function boton(){
    const Texto1 = document.getElementById("Texto");

    Texto1.innerHTML ="";

    for (var i = 1;i<20;i++) {
        Texto1.innerHTML = Texto1.innerHTML+"*".repeat(i) + "<br>";
    }
}