<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'andrey5_01@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'fs.rw$4pM'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('andrey5_01@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('andrey.fl.2017@yandex.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новый консультант с сайта Fabrika Rosta';
$mail->Body    = $name. ' оставил заявку, его телефон ' .$phone. '<br>Почта нового консультанта: ' .$email;

//'' .$name . ' оставил заявку, его телефон ' .$tel. '<br>Почта этого пользователя: 
//' .$email;
//$mail->AltBody = '';
// if ($_POST['check'] != 'secretcode') exit('Spam decected');

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank.html');
}
?>

