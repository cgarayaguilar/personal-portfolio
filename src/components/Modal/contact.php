<?php

$to= 'cgaray.aguilar97@gmail.com';
$subject='Mensaje desde portafolio personal';
$name= $_POST['name'];
$message='Hola mi nombre es:'. $name . ', \r\n' . nl2br($_POST['message']);
$mailheader= 'From' . $_POST['email'] .'\r\n';
$mailheader .= 'Reply-To' . $_POST['email'] .'\r\n';
$mailheader .= 'Content-type: text/html; charset=utf-8 \r\n';


mail($to, $subject, $message, $mailheader) or die('error al enviar el mensaje');

header('Location: https://personal-portfolio-gray.vercel.app/');