<?php

$apiKey= "a5678786789678dfg6ds86s89g7";

$jsonData = file_get_contents(__DIR__ . '/db/disc.json');

$decodedJson = json_decode($jsonData, true);

$exposedArray = [];

if (!is_null($decodedJson)) {
    $exposedArray = $decodedJson;
} else {
    // TODO: throw 500 error 
    exit;
}

if (isset($_GET['api_key']) && $_GET['api_key'] === $apiKey) {
    // $exposedArray = $decodedJson; => do nothing
} else {
    $cuttedArray = array_map(function ($array) {
        unset($array['poster']);
        return $array;
    }, $exposedArray);

    $exposedArray = $cuttedArray;
}



header('Content-Type: application/json');
echo json_encode($exposedArray);
