<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $email = $_POST["email"];
    $comentario = $_POST["comentario"];

    $destinatario = "Iwatchok2@gmail.com"; // Reemplaza con tu dirección de correo electrónico
    $asunto = "Nuevo comentario de $nombre $apellido";
    $mensaje = "Nombre: $nombre $apellido\nCorreo Electrónico: $email\nComentario:\n$comentario";

    // Usar la función mail() para enviar el correo electrónico
    if (mail($destinatario, $asunto, $mensaje)) {
        // El correo se envió con éxito
        echo "Mensaje enviado con éxito. Gracias por tu comentario.";
    } else {
        // Hubo un error al enviar el correo
        echo "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
}
?>
