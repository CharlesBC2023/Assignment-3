<?php

include 'const.php';

$error = SUCCESS_CODE;
$result = array();
$response = array();

// HINT: https://www.php.net/manual/en/features.file-upload.post-method.php
// FILL IN YOUR CODE BELOW

function customError($errno, $errstr) {
    error_log("Error: [$errno] $errstr");
}

set_error_handler("customError");

error_log(sprintf("Script: %s", $_SERVER['SCRIPT_NAME']));
error_log(sprintf("Uploads: %s", json_encode($_FILES)));

$uploaddir = getcwd().DIRECTORY_SEPARATOR . '/uploads';
$uploadfile = $uploaddir . '/' . basename($_FILES['regex_file']['name']);
error_log(sprintf("Uploaded to: %s", $uploadfile));

if (!move_uploaded_file($_FILES['regex_file']['tmp_name'], $uploadfile)) {
    error_log("Unable to upload file to $uploadfile\n");
    $error = ERROR_FILE_UPLOAD_FAILED;
}
//The file uploaded need to be placed in the directory "uploads"
//in the current directory of the project.
//The response of the script must be in JSON format along with required information.
// ...
// ...
// FILL IN YOUR CODE ABOVE

$response["status_code"] = $error;
$response["result_sets"] = $result;
header('Content-Type: application/json; charset=utf-8');
echo json_encode($response);