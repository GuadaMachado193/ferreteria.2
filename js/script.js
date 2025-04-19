function enviarWhatsApp() {
    const nombre = document.getElementById('nombreSolicitud').value;
    const apellido = document.getElementById('apellidoSolicitud').value;
    const email = document.getElementById('emailSolicitud').value;
    const descripcion = document.getElementById('descripcionSolicitud').value;
    const telefono = '5493513478652'; // Reemplaza con tu número

    const mensaje = `Hola,%20mi%20nombre%20es:%20${encodeURIComponent(nombre)}%20${encodeURIComponent(apellido)}.%0AEmail:%20${encodeURIComponent(email)}.%0AConsulta/Pedido:%20${encodeURIComponent(descripcion)}`;

    const urlWhatsApp = `https://wa.me/<span class="math-inline">\{telefono\}?text\=</span>{mensaje}`;
    window.open(urlWhatsApp, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    const nuevaSolicitudForm = document.getElementById('nuevaSolicitudForm');
    const mensajeSolicitudEnviada = document.getElementById('mensaje-solicitud-enviada');

    nuevaSolicitudForm.addEventListener('submit', function(event) {
        event.preventDefault();
        enviarWhatsApp(); // Llama a la función al enviar el formulario (puedes cambiar el botón a type="button")
        mensajeSolicitudEnviada.style.display = 'block';
        nuevaSolicitudForm.reset();
        setTimeout(() => {
            mensajeSolicitudEnviada.style.display = 'none';
        }, 5000);
    });
    // ... (el resto de tu JavaScript) ...
});
document.addEventListener('DOMContentLoaded', function() {
    const nuevaSolicitudForm = document.getElementById('nuevaSolicitudForm');
    const mensajeSolicitudEnviada = document.getElementById('mensaje-solicitud-enviada');
    const gestionSolicitudesSection = document.getElementById('gestion-solicitudes');
    // ... (se eliminan las referencias a los elementos de gestión de solicitudes)

    // --- Funcionalidad para la NUEVA SOLICITUD (SIN API) ---
    nuevaSolicitudForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = document.getElementById('nombreSolicitud').value;
        const apellido = document.getElementById('apellidoSolicitud').value;
        const email = document.getElementById('emailSolicitud').value;
        const descripcion = document.getElementById('descripcionSolicitud').value;

        // Aquí, en un escenario real SIN API, podrías intentar:
        // 1. Abrir una ventana de correo electrónico con los datos (mailto:) - Limitado y no confiable para datos complejos.
        // 2. Utilizar algún servicio de email del lado del cliente (más complejo y a menudo desaconsejado por seguridad).
        //
        // Para este ejemplo, simplemente mostraremos un mensaje de éxito en la página.

        console.log('Solicitud enviada (sin API):', { nombre, apellido, email, descripcion });
        mensajeSolicitudEnviada.style.display = 'block';
        nuevaSolicitudForm.reset();

        // Opcional: Puedes añadir aquí un temporizador para ocultar el mensaje después de unos segundos.
        setTimeout(() => {
            mensajeSolicitudEnviada.style.display = 'none';
        }, 5000);
    });

    // --- Funcionalidad para la GESTIÓN DE SOLICITUDES (SIN API) ---
    // Como no hay API, la funcionalidad de cargar, modificar y cancelar
    // solicitudes dinámicamente no es posible en el lado del cliente.
    // La sección de gestión en el HTML ahora informa al usuario sobre esto.

    // Se eliminan todas las funciones relacionadas con la gestión de solicitudes (cargarDetallesSolicitud,
    // mostrarDetallesSolicitud, mostrarFormularioModificarSolicitud, event listener del formulario
    // de modificación, mostrar/ocultar cartel de cancelación).
});