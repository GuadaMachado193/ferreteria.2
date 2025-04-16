document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validación del formulario de pedidos
document.querySelector('.pedidos-form').addEventListener('submit', function(event) {
    let nombre = document.getElementById('nombre').value.trim();
    let email = document.getElementById('email').value.trim();
    let producto = document.getElementById('producto').value.trim();
    let descripcion = document.getElementById('descripcion').value.trim();

    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (nombre === "") {
        alert('Por favor, ingrese su nombre.');
        event.preventDefault();
    } else if (email === "") {
        alert('Por favor, ingrese su dirección de correo electrónico.');
        event.preventDefault();
    } else if (!emailRegex.test(email)) {
        alert('Por favor, ingrese una dirección de correo electrónico válida.');
        event.preventDefault();
    } else if (producto === "") {
        alert('Por favor, ingrese el producto que desea solicitar.');
        event.preventDefault();
    } else if (descripcion === "") {
        alert('Por favor, ingrese una descripción del producto.');
        event.preventDefault();
    } else {
        alert('Su pedido ha sido enviado. Nos pondremos en contacto con usted.');
        // Aquí se podría agregar la lógica para enviar el formulario a un servidor
        event.preventDefault(); // Evita el envío real del formulario para este ejemplo
    }
});