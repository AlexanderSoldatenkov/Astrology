<?php

$name = $_POST['name'];
// $phone = $_POST['phone'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$textarea = $_POST['textarea'];
$radix = $_POST['radix'];
$childHoroscope = $_POST['childHoroscope'];
$compatibilityHoroscope = $_POST['compatibilityHoroscope'];
$solar = $_POST['solar'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'xspikyx@mail.ru';                 // Наш логин
$mail->Password = 'Tnh5LcH8Xu8AxFJRBfnP';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('xspikyx@mail.ru', 'AlexanderSoldatenkov');   // От кого письмо 
$mail->addAddress('xspikyx@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Астросфера заказ';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . '<br>
  Телефон: ' . $phone . '<br>
	E-mail: ' . $email . '<br>
	Содержание письма: ' . $textarea . '<br>
  Наименование услуги: ' . $radix . ' ' . $childHoroscope . ' ' . $compatibilityHoroscope . ' ' . $solar . '<br>
  ';

if (!$mail->send()) {
  return false;
} else {
  return true;
}
