function showPrice() {
  // Get the value of the last updated price from the hidden input field
  var price = document.getElementById("lastPrice").value;

  // Display the price on the page
  document.getElementById("displayPrice").innerHTML = "Last updated price: $" + price;

  // Use the price as a variable in your JavaScript code
  // ...
}

window.onload = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "api/ngn.php", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById("lastPrice").value = xhr.responseText;
      showPrice();
    }
  };
  xhr.send();
};
