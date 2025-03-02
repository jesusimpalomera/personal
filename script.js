// Función para redirigir a WhatsApp
function irWhatsApp() {
    // Reemplaza con tu número de WhatsApp
    window.location.href = "https://wa.me/523223525743"; 
}

// Función para mostrar el mensaje "Jodeteeeeee"
function noPuedo() {
    document.querySelector('.container').innerHTML = '<h1 class="jodeteeeeee">¡JÓDETE! 😂</h1>';
}

// Lista de emojis de cervezas y caguamas
const emojis = ["🍻", "🍺", "🍶", "🥂", "🍷"];

// Función para crear un emoji aleatorio de cerveza/caguama
function createBeerEmoji() {
    const beer = document.createElement("div");
    beer.classList.add("beer-emoji");
    beer.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]; // Selecciona un emoji aleatorio
    beer.style.left = Math.random() * 100 + "vw";  // Posición horizontal aleatoria
    beer.style.animationDuration = Math.random() * 3 + 2 + "s"; // Duración aleatoria de la caída
    document.body.appendChild(beer);

    // Eliminar el emoji después de que termine la animación
    setTimeout(() => {
        beer.remove();
    }, 5000);
}

// Crear emojis de cerveza continuamente
setInterval(createBeerEmoji, 300);
