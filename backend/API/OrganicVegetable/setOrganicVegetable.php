<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$con = new mysqli('localhost', 'root', '', 'fruitables');
$feaprodName = $_POST['feaprodName'];
$feaprodDetails = $_POST['feaprodDetails'];

$target_dir = "../../images/";
$target_file = $target_dir . basename($_FILES["feaprodPhoto"]["name"]);
if (move_uploaded_file($_FILES["feaprodPhoto"]["tmp_name"], $target_file)) {
    $feaprodPhoto = $_FILES["feaprodPhoto"]["name"];
} else {
    $feaprodPhoto='';
}


$query = "insert into feature_products(name,details,photo)values('$feaprodName','$feaprodDetails','$feaprodPhoto')";
if ($feaprodName != '' && $feaprodDetails != '' && $feaprodPhoto != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}