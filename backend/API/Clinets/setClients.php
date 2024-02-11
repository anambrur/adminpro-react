<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$con = new mysqli('localhost', 'root', '', 'fruitables');
$clientName = $_POST['clientName'];
$clientDetails = $_POST['clientDetails'];
$clinentProfession = $_POST['clinentProfession'];

$target_dir = "../../images/";
$target_file = $target_dir . basename($_FILES["clinetPhoto"]["name"]);
if (move_uploaded_file($_FILES["clinetPhoto"]["tmp_name"], $target_file)) {
    $clinetPhoto = $_FILES["clinetPhoto"]["name"];
} else {
    $clinetPhoto='';
}


$query = "insert into clients(details,client_name,profession,photo)values('$clientDetails','$clientName','$clinentProfession','$clinetPhoto')";
if ($clientName != '' && $clientDetails != '' && $clinentProfession != '' && $clinetPhoto!='' ) {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}