
  document.getElementById("btc-btn").addEventListener("click", function() {
    document.getElementById("btc-form").style.display = "block";
    document.getElementById("eth-form").style.display = "none";
    document.getElementById("xrp-form").style.display = "none";
    document.getElementById("ltc-form").style.display = "none";
    document.getElementById("bnb-form").style.display = "none";
     document.getElementById("xlm-form").style.display = "none";
 
  });

document.getElementById("eth-btn").addEventListener("click", function() {
    document.getElementById("btc-form").style.display = "none";
    document.getElementById("eth-form").style.display = "block";
    document.getElementById("xrp-form").style.display = "none";
    document.getElementById("ltc-form").style.display = "none";
    document.getElementById("bnb-form").style.display = "none";
    document.getElementById("xlm-form").style.display = "none";
 
  });

document.getElementById("xrp-btn").addEventListener("click", function() {
    document.getElementById("btc-form").style.display = "none";
    document.getElementById("eth-form").style.display = "none";
    document.getElementById("xrp-form").style.display = "block";
    document.getElementById("ltc-form").style.display = "none";
    document.getElementById("bnb-form").style.display = "none";
     document.getElementById("xlm-form").style.display = "none";
 
  });

document.getElementById("ltc-btn").addEventListener("click", function() {
    document.getElementById("btc-form").style.display = "none";
    document.getElementById("eth-form").style.display = "none";
    document.getElementById("xrp-form").style.display = "none";
    document.getElementById("ltc-form").style.display = "block";
    document.getElementById("bnb-form").style.display = "none";
     document.getElementById("xlm-form").style.display = "none";
 
  });
document.getElementById("bnb-btn").addEventListener("click", function() {
    document.getElementById("btc-form").style.display = "none";
    document.getElementById("eth-form").style.display = "none";
    document.getElementById("xrp-form").style.display = "none";
    document.getElementById("ltc-form").style.display = "none";
    document.getElementById("bnb-form").style.display = "block";
     document.getElementById("xlm-form").style.display = "none";
 
  });

document.getElementById("xlm-btn").addEventListener("click", function() {
    document.getElementById("btc-form").style.display = "none";
    document.getElementById("eth-form").style.display = "none";
    document.getElementById("xrp-form").style.display = "none";
    document.getElementById("ltc-form").style.display = "none";
    document.getElementById("bnb-form").style.display = "none";
     document.getElementById("xlm-form").style.display = "block";
 
  });
 function fetchRate() {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then(response => response.json())
      .then(data => {
        const rate = data.rates.NGN;
        document.querySelector("#rate").innerHTML = `1 USD = ${rate} NGN`;
      })
      .catch(error => console.error(error));
  }
  
  fetchRate();
  setInterval(fetchRate, 60000);
 