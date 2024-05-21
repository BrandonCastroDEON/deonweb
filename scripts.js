// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        
        if (name && email && message) {
            alert('Formulario enviado correctamente');
            form.reset();
        } else {
            alert('Por favor, complete todos los campos');
        }
    });
});
