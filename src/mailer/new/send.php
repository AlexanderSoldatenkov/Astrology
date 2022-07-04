<?php
// Файлы phpmailer
require './PHPMailer.php';
require './SMTP.php';
require './Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
// $phone = $_POST['phone'];
$email = $_POST['email'];
$textarea = $_POST['textarea'];
$radix = $_POST['radix'];
$childHoroscope = $_POST['childHoroscope'];
$compatibilityHoroscope = $_POST['compatibilityHoroscope'];
$solar = $_POST['solar'];
// $file = $_FILES['myfile'];

// Формирование самого письма
$title = "Астросфера заказ";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
Телефон: ' $phone '<br>
<b>Почта:</b> $email<br><br>
<b>Сообщение:</b><br>$textarea<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  //$mail->SMTPDebug = 2;
  $mail->Debugoutput = function ($str, $level) {
    $GLOBALS['status'][] = $str;
  };

  // Настройки вашей почты
  $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'xspikyx@mail.ru'; // Логин на почте
  $mail->Password   = 'Tnh5LcH8Xu8AxFJRBfnP'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;
  $mail->setFrom('xspikyx@mail.ru', 'AlexanderSoldatenkov'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('xspikyx@mail.ru');
  // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

  // Прикрипление файлов к письму
  // if (!empty($file['name'][0])) {
  //     for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
  //         $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
  //         $filename = $file['name'][$ct];
  //         if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
  //             $mail->addAttachment($uploadfile, $filename);
  //             $rfile[] = "Файл $filename прикреплён";
  //         } else {
  //             $rfile[] = "Не удалось прикрепить файл $filename";
  //         }
  //     }   
  // }
  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  // Проверяем отравленность сообщения
  if ($mail->send()) {
    $result = "success";
  } else {
    $result = "error";
  }
} catch (Exception $e) {
  $result = "error";
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
