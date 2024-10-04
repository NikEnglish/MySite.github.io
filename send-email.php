<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "help.funenglish@gmail.com";
    $subject = "New Contact Form Submission";

    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $sent = mail($to, $subject, $body, $headers);

    echo json_encode([
        'success' => ($sent ? true : false)
    ]);
}
?>
