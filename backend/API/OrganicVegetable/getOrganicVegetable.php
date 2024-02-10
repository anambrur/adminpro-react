<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$con=new mysqli('localhost','root','','fruitables');
$data=$con->query('select * from organic_vegetable')->fetch_all(MYSQLI_ASSOC);
header('Content-Type: Application/json');
echo json_encode($data);