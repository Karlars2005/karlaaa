document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("text");
    const button1 = document.getElementById("btn1");
    const button2 = document.getElementById("btn2");

    // Cambiar texto con los botones
    button1.addEventListener("click", () => {
        textElement.textContent = "Bienvenidos ";
    });

    button2.addEventListener("click", () => {
        textElement.textContent = "Adios";
    });

    // Manejar las teclas de flecha
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            textElement.textContent = "Flecha derecha presionada";
        } else if (event.key === "ArrowLeft") {
            textElement.textContent = "Flecha izquierda presionada";
        }
    });
});
