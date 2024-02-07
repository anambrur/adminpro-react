<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$con = new mysqli('localhost', 'root', '', 'fruitables');
$slHeader = $_POST['slHeader'];
$sltitle = $_POST['sltitle'];

$target_dir = "../images/";
$target_file = $target_dir . basename($_FILES["slphoto"]["name"]);
if (move_uploaded_file($_FILES["slphoto"]["tmp_name"], $target_file)) {
    $slphoto = $_FILES["slphoto"]["name"];
} else {
    $slphoto='';
}


$query = "insert into slider(heading,title,photo)values('$slHeader','$sltitle','$slphoto')";
if ($slHeader != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}