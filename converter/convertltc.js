async function convertLTCtoUSD() {
  const ltcAmount = document.getElementById("ltc-amount").value;
  let ltc_usd = 0;
  
  // Get the exchange rate from the PHP file
  let exchangeRate = await fetch(`api/phpltc.php?amount=${ltcAmount}`)
    .then(res => res.json())
    .then(ltcusd => {
      ltc_usd = parseInt(ltcusd);
      document.getElementById("usd-amountltc").value = ltcusd.toFixed(2);
      return ltc_usd;
    });

  // Get the NGN exchange rate from the PHP file
  let ngnRate = await fetch('api/ngnrate.php')
    .then(res => res.json())
    .then(ratengn => {
      ratengn = parseInt(ratengn);
      return ratengn;
    });

  // Calculate the price of ltc in Naira
  
  let ltcInNaira = exchangeRate * ngnRate;
  let formattedFigure = addCommas(ltcInNaira);
  console.log(formattedFigure);
  // Display the price of ltc in Naira in HTML
  //document.getElementById("nairaPrice").value = ltcInNaira.toFixed(2);
  document.getElementById("nairaltcPrice").innerHTML = "₦"+ formattedFigure;
  console.log(ltcInNaira);
}

function addCommas(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
setInterval(
  function() {
    document.getElementById("usd-amountltc").value = "";
    document.getElementById("ltc-amount").value = "";
    document.getElementById("nairaltcPrice").value = "";
  }, 15000);