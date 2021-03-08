<?php 
 use PHPMailer\PHPMailer\PHPMailer;
 use PHPMailer\PHPMailer\Exception;

 require 'PHPMailer-6.3.0/src/Exception.php';
 require 'PHPMailer-6.3.0/src/PHPMailer.php';
 
 $mail = new PHPMailer(true);
 $mail->CharSet = 'UTF-8';
 $mail->setLanguage('ru', 'PHPMailer-6.3.0/language/') ;
 $mail->isHTML(true);

 //От кого письмо 
 $mail->setFrom('ivovochka48@gmail.com', 'Производство цветников');
 $mail->addAddress('ivovochka48@gmail.com');
 $mail-> subject = 'Привет!';

 //
 $hand = "Оптoм";
 if($_POST['hand'] == " red"){
     $hand = "В розницу";
 }

 $body='<h1>Приветики-пистолетики</h1>';
 
 if(trim(!empty($_POST['name']))){
     $body.='<p><strong>Имя:</strong>'.$_POST['name'].'</p>';
 }
 if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong>'.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['phone']))){
    $body.='<p><strong>Телефон:</strong>'.$_POST['phone'].'</p>';
}
if(trim(!empty($_POST['hand']))){
    $body.='<p><strong>Заказчик:</strong>'.$_POST['hand'].'</p>';
}
if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Сообщение:</strong>'.$_POST['message'].'</p>';
}

$mail->Body = $body;

if(!$mail->send()){
    $message = 'Error';
}else {
    $message = 'Данные отправлены';
};

$response = ['message'=>$message];

header('Content-type: application/json');
echo json_encode($response);
?> 