async function convertXLMtoUSD() {
  const xlmAmount = document.getElementById("xlm-amount").value;
  let xlm_usd = 0;
  
  // Get the exchange rate from the PHP file
  let exchangeRate = await fetch(`api/phpxlm.php?amount=${xlmAmount}`)
    .then(res => res.json())
    .then(xlmusd => {
      xlm_usd = parseInt(xlmusd);
      document.getElementById("usd-amountxlm").value = xlmusd.toFixed(2);
      return xlm_usd;
    });

  // Get the NGN exchange rate from the PHP file
  let ngnRate = await fetch('api/ngnrate.php')
    .then(res => res.json())
    .then(ratengn => {
      ratengn = parseInt(ratengn);
      return ratengn;
    });

  // Calculate the price of xlm in Naira
  let xlmInNaira = exchangeRate * ngnRate;
  let formattedFigure = addCommas(xlmInNaira);
  console.log(formattedFigure);
  
  // Display the price of xlm in Naira in HTML
  //document.getElementById("nairaPrice").value = xlmInNaira.toFixed(2);
  document.getElementById("nairaxlmPrice").innerHTML = "₦"+ formattedFigure;//.toFixed(2);
  console.log(xlmInNaira);
}

function addCommas(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
setInterval(
  function() {
    document.getElementById("xlm-amount").value = "";
    document.getElementById("nairaxlmPrice").value = "";
    document.getElementById("usd-amountxlm").value = "";
  }, 15000);