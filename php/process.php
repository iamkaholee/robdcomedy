<?php
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$message = $_POST["message"];

$EmailTo = "rob@robdesantiscomedy.com";
$Subject = "New Message from Comedy Site";
 
// prepare email body text
$Body .= "First Name: ";
$Body .= $fname;
$Body .= "\n";
 
$Body .= "Last Name: ";
$Body .= $lname;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 
?>