function showPrice() {
  // Get the value of the last updated price from the hidden input field
  var price = document.getElementById("lastPrice").value;
  //var nairaprice = document.getElementById("nairaPrice").value;

  // Display the price on the page
  document.getElementById("displayPrice").innerHTML = "1 Dollar = ₦" + price;
  //document.getElementById("displaynairaPrice").innerHTML = nairaprice;

  // Use the price as a variable in your JavaScript code
  // ...
}

window.onload = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "api/ngnrate.php", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById("lastPrice").value = xhr.responseText;
      showPrice();
      //document.getElementById("nairaPrice").value = showPrice();
    }
  };
  xhr.send();
};
