<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$con = new mysqli('localhost', 'root', '', 'fruitables');
$orgaprodName = $_POST['orgaprodName'];
$orgaprodDetails = $_POST['orgaprodDetails'];
$orgaprodPrice = $_POST['orgaprodPrice'];
$id = $_POST['id'];

$target_dir = "../../images/";
$target_file = $target_dir . basename($_FILES["orgaprodPhoto"]["name"]);
if (move_uploaded_file($_FILES["orgaprodPhoto"]["tmp_name"], $target_file)) {
    $orgaprodPhoto = $_FILES["orgaprodPhoto"]["name"];
    $query = "update organic_vegetable set title='$orgaprodName', details='$orgaprodDetails',price='$orgaprodPrice',photo='$orgaprodPhoto' where id=$id";
} else {
    $orgaprodPhoto = '';
    $query = "update organic_vegetable set title='$orgaprodName', details='$orgaprodDetails,price='$orgaprodPrice' where id=$id";
}



if ($orgaprodName != '' && $orgaprodDetails != ''  && $orgaprodPhoto != '') {
    $con->query($query);
    echo json_encode(['status' => true]);
} else {
    echo json_encode(['status' => false]);
}