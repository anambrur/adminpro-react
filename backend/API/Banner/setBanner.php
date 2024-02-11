<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$con = new mysqli('localhost', 'root', '', 'fruitables');
$bannerTitle = $_POST['bannerTitle'];
$bannerStore = $_POST['bannerStore'];
$bannerDetails = $_POST['bannerDetails'];
$bannerPrice = $_POST['bannerPrice'];

$target_dir = "../../images/";
$target_file = $target_dir . basename($_FILES["bannerPhoto"]["name"]);
if (move_uploaded_file($_FILES["bannerPhoto"]["tmp_name"], $target_file)) {
    $bannerPhoto = $_FILES["bannerPhoto"]["name"];
} else {
    $bannerPhoto='';
}


$query = "insert into banner(title,store,details,photo,price)values('$bannerTitle','$bannerStore','$bannerDetails','$bannerPhoto','$bannerPrice')";
if ($bannerTitle != '' && $bannerStore != '' && $bannerDetails != '' && $bannerPhoto!='' && $bannerPrice!='') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}