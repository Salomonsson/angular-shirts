<?php
header('Access-Control-Allow-Origin: *');  
header("content-type: application/json");

$string = file_get_contents("mock-shirts.json");
$content = json_decode(json_encode($string));

print($content);
?>