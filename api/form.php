<?php

function saveToDatabase() {
      echo "This is the first function.";
      // retrieve form data
    $crypto = "BTC";
    $amount = $_POST["btc-amount"];
    $amountUsd = $_POST["usd-amountbtc"];
    $whatsappNumber = $_POST["whatsappNumber"];
    $email = $_POST["email"];
    $btcPrice = $_POST["nairabtcPrice"];
    $amountinnaira = $_POST['naira'];
    $transaction_timestamp = date("Y-m-d H:i:s");
    $message = "Hi seller, we've recieved your order to sell $crypto coin.\n Here are your order details:\n Coin to sell: $crypto \n Amount: $amount\n Value in USD: $amountUsd\n Email: $email\n Whatsapp Number: $whatsappNumber\n Amount to be Recieved in Naira:$btcPrice\n Time:$transaction_timestamp \n\n Thanks." ;
    
      // Connect to database
      $servername = "localhost";
      $username = "softyeds_trade";
      $password = "softyeds_trade";
      $dbname = "softyeds_trade";
    
      // Create connection
      $conn = new mysqli($servername, $username, $password, $dbname);
    
      // Check connection
      if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
      }
    
      // Insert data into database table  btc_price,
      $sql = "INSERT INTO crypto_transactions ( crypto, amount, amount_usd, amount_naira, whatsapp_number, email, btc_price_at_sell, transaction_timestamp)
      VALUES ('$crypto', '$amount', '$amountUsd', '$amountinnaira', '$whatsappNumber', '$email', '$btcPrice', '$transaction_timestamp')";
    
      if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
    
      $conn->close();
    //echo $amountinnaira;
}
function whatsapp() {
    $crypto = "BTC";
    $amount = $_POST["btc-amount"];
    $amountUsd = $_POST["usd-amountbtc"];
    $whatsappNumber = $_POST["whatsappNumber"];
    $email = $_POST["email"];
    $btcPrice = $_POST["nairabtcPrice"];
    $transaction_timestamp = date("Y-m-d H:i:s");
    $message = "Hi seller, we've recieved your order to sell $crypto coin.\n Here are your order details. \n *ORDER DETIALS*\n *Coin to sell:* $crypto \n *Amount:*  $amount\n *Value in USD:* $amountUsd\n *Email:* $email\n *Whatsapp Number:* $whatsappNumber\n *Amount to be Recieved in Naira:* $amountinnaira\n *Time:* $transaction_timestamp \n\n Thanks." ;

  $data = [                                                      
  'api_key' => 'USFriabaFIYVMkG2hL2EuW9YI0Z5j8', 
  'sender' => '2349058265163',
  'number' => $whatsappNumber,
  'message' => $message, 
                
   ];
  
  //'image' => 'URL image ', //OPTIONAL
   //REQUIRED ( Button minimal 1 )
  //'button2' => 'Button 2', //OPTIONAL
  //'button3' => 'Button 3',//OPTION
  
  $url = 'https://sms.softswapp.com/send-message';
  $curl = curl_init();                                                  
  curl_setopt_array($curl, array(
  CURLOPT_URL =>$url,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => json_encode($data),
  CURLOPT_HTTPHEADER => array(
  'Content-Type: application/json'
  ),
  ));                                                   
 $response = curl_exec($curl);                                                
 curl_close($curl);
 //echo $response; 
}
function mailer() {
  // Form data
  $crypto = "BTC";
  $amount = $_POST["btc-amount"];
  $amountUsd = $_POST["usd-amountbtc"];
  $whatsappNumber = $_POST["whatsappNumber"];
  $email = $_POST["email"];
  $btcPrice = $_POST["nairabtcPrice"];
  $transaction_timestamp = date("Y-m-d H:i:s");
  
  $to = $email; // this is your Email address
  $from = 'info@softswapp.com'; // this is the sender's Email address
  //$first_name = $_POST['first_name'];
  //$last_name = $_POST['last_name'];
  $subject = "Form submission";
  $subject2 = "Copy of your form submission";
  $message1 = $crypto . " " . $crypto . " wrote the following:" . "\n\n" . $_POST['message1'];
  $message2 = "Here is a copy of your message " . $crypto . "\n\n" . $_POST['message1'];

  $headers = "From:" . $from;
  $headers2 = "From:" . $to;
  mail($to,$subject,$message1,$headers);
  mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
  //echo "Mail Sent. Thank you " . $crypto . ", we will contact you shortly.";
}


if (isset($_POST['sell_button'])) {
 saveToDatabase();
 whatsapp();
 mailer(); 
 include ("modal.html");
} else {
        echo "Error sending info";
      }
?>
