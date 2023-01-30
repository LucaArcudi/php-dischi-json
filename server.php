<?php

$jsonData = file_get_contents(__DIR__ . '/db/disc.json');


header('Content-Type: application/json');

echo $jsonData;
