<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$con = new mysqli('localhost', 'root', '', 'fruitables');
$bannerTitle = $_POST['bannerTitle'];
$bannerStore = $_POST['bannerStore'];
$bannerDetails = $_POST['bannerDetails'];
$bannerPrice = $_POST['bannerPrice'];
$id = $_POST['id'];

$target_dir = "../../images/";
$target_file = $target_dir . basename($_FILES["bannerPhoto"]["name"]);
if (move_uploaded_file($_FILES["bannerPhoto"]["tmp_name"], $target_file)) {
    $bannerPhoto = $_FILES["bannerPhoto"]["name"];
    $query = "update banner set title='$bannerTitle', store='$bannerStore',details='bannerDetails',price='$bannerPrice',photo='$bannerPhoto' where id=$id";
} else {
    $bannerPhoto = '';
    $query = "update banner set title='$bannerTitle', store='$bannerStore',details='bannerDetails',price='$bannerPrice' where id=$id";
}



if ($bannerTitle != '' && $bannerStore != '' && $bannerDetails != '' && $bannerPhoto != '' && $bannerPrice != '') {
    $con->query($query);
    echo json_encode(['status' => true]);
} else {
    echo json_encode(['status' => false]);
}