<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$con = new mysqli('localhost', 'root', '', 'fruitables');
$slHeader = $_POST['slHeader'];
$sltitle = $_POST['sltitle'];
$id = $_POST['id'];
$target_dir = "../images/";
$target_file = $target_dir . basename($_FILES["slphoto"]["name"]);
if (move_uploaded_file($_FILES["slphoto"]["tmp_name"], $target_file)) {
    $slphoto = $_FILES["slphoto"]["name"];
    $query = "update slider set heading='$slHeader', title='$sltitle', photo='$slphoto' where id=$id";
} else {
    $query = "update slider set heading='$slHeader',title='$sltitle' where id=$id";
}



if ($slHeader != '') {
    $con->query($query);
    echo json_encode(['status' => true]);
} else {
    echo json_encode(['status' => false]);
}