<?php
$sendto   = "mikerkwan@gmail.com";
$usermail = $_POST['email'];
$username = $_POST['name'];
$content  = nl2br($_POST['msg']);

$subject  = "Message from hireahoneybadger.com";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Badger Customer</h2>\r\n";
$msg .= "<p><strong>From:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>E-mail:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Message:</strong> ".$content."</p>\r\n";
$msg .= "</body></html>";


if(@mail($sendto, $subject, $msg, $headers)) {
    echo "true";
} else {
    echo "false";
}

?>