<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$con = new mysqli('localhost', 'root', '', 'fruitables');
$prodName = $_POST['prodName'];
$prodDetails = $_POST['prodDetails'];
$prodPrice = $_POST['prodPrice'];

$target_dir = "../../images/";
$target_file = $target_dir . basename($_FILES["prodPhoto"]["name"]);
if (move_uploaded_file($_FILES["prodPhoto"]["tmp_name"], $target_file)) {
    $prodPhoto = $_FILES["prodPhoto"]["name"];
} else {
    $prodPhoto='';
}


$query = "insert into products(name,details,price,photo)values('$prodName','$prodDetails','$prodPrice','$prodPhoto')";
if ($prodName != '' && $prodDetails != '' && $prodPrice != '' && $prodPhoto != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}