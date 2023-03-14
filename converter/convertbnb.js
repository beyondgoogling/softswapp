async function convertBNBtoUSD() {
  const bnbAmount = document.getElementById("bnb-amount").value;
  let bnb_usd = 0;
  
  // Get the exchange rate from the PHP file
  let exchangeRate = await fetch(`api/phpbnb.php?amount=${bnbAmount}`)
    .then(res => res.json())
    .then(bnbusd => {
      bnb_usd = parseInt(bnbusd);
      document.getElementById("usd-amountbnb").value = bnbusd.toFixed(2);
      return bnb_usd;
    });

  // Get the NGN exchange rate from the PHP file
  let ngnRate = await fetch('api/ngnrate.php')
    .then(res => res.json())
    .then(ratengn => {
      ratengn = parseInt(ratengn);
      return ratengn;
    });

  // Calculate the price of bnb in Naira
 
  let bnbInNaira = exchangeRate * ngnRate;
  let formattedFigure = addCommas(bnbInNaira);
  console.log(formattedFigure);
  // Display the price of bnb in Naira in HTML
  //document.getElementById("nairaPrice").value = bnbInNaira.toFixed(2);
  document.getElementById("nairabnbPrice").innerHTML = "₦"+ formattedFigure;//.toFixed(2);
  //console.log();
}


function addCommas(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  setInterval(
  function() {
    document.getElementById("usd-amountbnb").value = "";
    document.getElementById("bnb-amount").value = "";
    document.getElementById("nairabnbPrice").value = "";
  }, 15000);