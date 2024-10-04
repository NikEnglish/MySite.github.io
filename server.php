<?php
// server.php

// Проверяем, есть ли POST-запрос
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Здесь должна быть логика сохранения сообщения
    // Например, запись в файл или сохранение в БД
    file_put_contents('messages.txt', $name . ':' . $email . ':' . $message . "\n", FILE_APPEND);

    echo json_encode(['success' => true]);
} else {
    echo json_encode(['error' => 'Неверный метод запроса']);
}
?>
