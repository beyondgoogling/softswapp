async function convertBTCtoUSD() {
  const btcAmount = document.getElementById("btc-amount").value;
  let btc_usd = 0;
  
  // Get the exchange rate from the PHP file
  let exchangeRate = await fetch(`api/phpbtc.php?amount=${btcAmount}`)
    .then(res => res.json())
    .then(btcusd => {
      btc_usd = parseInt(btcusd);
      document.getElementById("usd-amountbtc").value = btcusd.toFixed(2);
      return btc_usd;
    });

  // Get the NGN exchange rate from the PHP file
  let ngnRate = await fetch('api/ngnrate.php')
    .then(res => res.json())
    .then(ratengn => {
      ratengn = parseInt(ratengn);
      return ratengn;
    });

  // Calculate the price of btc in Naira
  
  let btcInNaira = exchangeRate * ngnRate;
  var naira = btcInNaira;
  let formattedFigure = addCommas(btcInNaira);
  console.log(formattedFigure);
  // Display the price of btc in Naira in HTML
   //document.getElementById("nairaPrice").innerHTML = btcInNaira;// .toFixed(2);
  document.getElementById("nairabtcPrice").innerHTML = "₦"+ formattedFigure;//.toFixed(2);
  
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'api/form.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    };
    xhr.send('data=' + encodeURIComponent(naira));
     
}




function addCommas(n) {
  return n.toStrig().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
 
function resetForm() {
    document.getElementById("btc-formx").reset();

}
  
setInterval(resetForm, 300000);  