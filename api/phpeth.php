<?php
  $amount = $_GET['amount'];
  $url = "http://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=ETH&convert=USD";

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "X-CMC_Pro_API_Key: b1b2c19b-8490-4ce2-8777-860d4a05dfa6"
  ]);
  $result = curl_exec($ch);
  curl_close($ch);

  $result = json_decode($result, true);
  $usdValue = $result["data"]["ETH"]["quote"]["USD"]["price"];

  echo $usdValue * $amount;
?>