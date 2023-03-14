<?php
$servername = "localhost";
$username = "afrodwym_trade";
$password = "afrodwym_trade";
$dbname = "afrodwym_trade";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT price FROM prices ORDER BY id DESC LIMIT 1";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // Fetch the last updated price from the database
    $row = mysqli_fetch_assoc($result);
    $lastPrice = $row["price"];
    
} else {
   // $lastPrice = "N/A";
}

mysqli_close($conn);

echo $lastPrice;
?>
