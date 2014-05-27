

<?php

$sendto   = "mikerkwan@gmail.com";
$usermail = $_POST['email'];
$content  = nl2br($_POST['msg']);

$subject  = "New Message";

$headers  = "From: " . strip_tags($useremail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($useremail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>New User Feedback</h2>\r\n";
$msg .= "<p><strong>Sent by:</strong> ".$useremail."</p>\r\n";
$msg .= "<p><strong>Message:</strong> ".$content."</p>\r\n";
$msg .= "</body></html>";


if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>