document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    // Verificar que el formulario existe antes de añadir el evento de envío
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevenir el envío del formulario por defecto

            // Obtener los valores de los campos y limpiar espacios al inicio y final
            const nombre = document.getElementById("nombre").value.trim();
            const celular = document.getElementById("celular").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();
            const submitButton = form.querySelector("button[type='submit']");

            // Validar que los campos no estén vacíos
            if (nombre === "" || celular === "" || email === "" || mensaje === "") {
                alert("Por favor, completa todos los campos.");
                return;
            }

            // Validar el formato del número de celular (10 dígitos)
            const celularPattern = /^\d{10}$/;
            if (!celularPattern.test(celular)) {
                alert("El número de celular debe tener 10 dígitos.");
                return;
            }

            // Validar el formato del correo electrónico usando una expresión regular
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Por favor, ingresa un correo electrónico válido.");
                return;
            }

            // Deshabilitar el botón de enviar para evitar múltiples envíos
            submitButton.disabled = true;

            // Lógica para procesar los datos (por ejemplo, enviarlos a un servidor)
            alert("Gracias por tu mensaje, " + nombre + ". Nos pondremos en contacto contigo pronto.");

            // Reiniciar el formulario y habilitar el botón de envío nuevamente
            form.reset();
            submitButton.disabled = false;
        });
    }
});

