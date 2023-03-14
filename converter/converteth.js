 async function convertETHtoUSD() {
  const ethAmount = document.getElementById("eth-amount").value;
  let eth_usd = 0;
  
  // Get the exchange rate from the PHP file
  let exchangeRate = await fetch(`api/phpeth.php?amount=${ethAmount}`)
    .then(res => res.json())
    .then(ethusd => {
      eth_usd = parseInt(ethusd);
      document.getElementById("usd-amounteth").value = ethusd.toFixed(2);
      return eth_usd;
    });

  // Get the NGN exchange rate from the PHP file
  let ngnRate = await fetch('api/ngnrate.php')
    .then(res => res.json())
    .then(ratengn => {
      ratengn = parseInt(ratengn);
      return ratengn;
    });

  // Calculate the price of eth in Naira
  
  let ethInNaira = exchangeRate * ngnRate;
  let formattedFigure = addCommas(ethInNaira);
  console.log(formattedFigure);
  // Display the price of eth in Naira in HTML
  //document.getElementById("nairaPrice").value = ethInNaira.toFixed(2);
  document.getElementById("nairaethPrice").innerHTML = "₦"+ formattedFigure;
  
}
 function addCommas(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
 setInterval(
  function() {
    document.getElementById("usd-amounteth").value = "";
    document.getElementById("eth-amount").value = "";
    document.getElementById("nairaethPrice").value = "";
  }, 15000);