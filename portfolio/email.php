<?php

// Gets values from form
$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];

$to = "shaylynskaran@gmail.com";
$headers = "From:" . $from . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 

if(@mail($to,$subject,$message,$headers))
{
  print "<script>document.location.href='http://shaylynkaran.github.io/portfolio/success.html';</script>";
  // Created by Future Tutorials
}else{
  echo "Error! Please try again.";
}
?>