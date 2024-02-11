<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$con = new mysqli('localhost', 'root', '', 'fruitables');
$clientName = $_POST['clientName'];
$clientDetails = $_POST['clientDetails'];
$clinentProfession = $_POST['clinentProfession'];
$id = $_POST['id'];

$target_dir = "../../images/";
$target_file = $target_dir . basename($_FILES["clinetPhoto"]["name"]);
if (move_uploaded_file($_FILES["clinetPhoto"]["tmp_name"], $target_file)) {
    $clinetPhoto = $_FILES["clinetPhoto"]["name"];
    $query = "update clients set details='$clientDetails', client_name='$clientName',profession='clinentProfession',photo='$clinetPhoto' where id=$id";
} else {
    $clinetPhoto = '';
    $query = "update clients set title='$clientDetails', client_name='$clientName',profession='clinentProfession',photo='$bannerPrice' where id=$id";
}



if ($clientDetails != '' && $clientName != '' && $clinentProfession != '' && $clinetPhoto != '') {
    $con->query($query);
    echo json_encode(['status' => true]);
} else {
    echo json_encode(['status' => false]);
}