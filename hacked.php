<?php
    header('Access-Control-Allow-Origin: *');
    $type = $_GET['type'];
    $msg = $_GET['msg'];
    $msg = str_replace(" ","%20",$msg);
    //Sends the IP to the Discord Webhook to notify the scythes
    $port = "";
    $url = "http://logfro.de:".$port."/".$type."/".$msg;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_exec($ch);
    curl_close($ch);
    echo "successful";
?>
