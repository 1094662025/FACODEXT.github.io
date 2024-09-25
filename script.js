document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los botones del menú
    const buttons = document.querySelectorAll(".menu-btn");

    // Función para cargar el contenido desde un archivo HTML
    function loadContent(target) {
        // Contenedor donde se cargará el contenido
        const content = document.getElementById("content");

        // Ruta al archivo HTML correspondiente
        const url = `/sections/${target}.html`;

        // Usamos fetch para obtener el archivo
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar el contenido.');
                }
                return response.text();
            })
            .then(data => {
                // Cargamos el contenido en el contenedor
                content.innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
                content.innerHTML = '<p>No se pudo cargar el contenido. Intenta nuevamente.</p>';
            });
    }

    // Añadir evento de click a cada botón
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Obtener la sección objetivo desde el atributo data-target
            const target = this.getAttribute("data-target");

            // Cargar la sección correspondiente
            loadContent(target);
        });
    });

    // Cargar la primera sección por defecto (Inicio)
    loadContent("inicio");
});

