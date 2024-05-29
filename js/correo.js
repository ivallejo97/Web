<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
    <script>
        (function(){
            emailjs.init("your_user_id"); // Reemplaza "your_user_id" con tu User ID de EmailJS

            document.getElementById('email-form').addEventListener('submit', function(event) {
                event.preventDefault();
                
                // Aquí se envía el correo
                emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(function(response) {
                    console.log('Correo enviado con éxito', response);
                    alert('Correo enviado con éxito');
                }, function(error) {
                    console.log('Error al enviar el correo', error);
                    alert('Error al enviar el correo');
                });
            });
        })();
    </script>