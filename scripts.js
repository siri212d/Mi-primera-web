
// Validación del formulario de contacto
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenir el envío del formulario para la demostración

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Gracias por contactarnos, " + name + "! Tu mensaje ha sido enviado.");
    } else {
        alert("Por favor, completa todos los campos del formulario.");
    }
});
``
