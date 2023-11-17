<?php

include 'const.php';

$error = SUCCESS_CODE;
$pattern = "";
$result = array();
$response = array();

// FILL IN YOUR CODE BELOW
// ...
// ...
// ...
// FILL IN YOUR CODE ABOVE

$response["status_code"] = $error;
$response["pattern"] = $pattern;
$response["result_sets"] = $result;
header('Content-Type: application/json; charset=utf-8');
echo json_encode($response);

?>