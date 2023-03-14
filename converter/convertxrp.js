async function convertXRPtoUSD() {
  const xrpAmount = document.getElementById("xrp-amount").value;
  let xrp_usd = 0;
  
  // Get the exchange rate from the PHP file
  let exchangeRate = await fetch(`api/phpxrp.php?amount=${xrpAmount}`)
    .then(res => res.json())
    .then(xrpusd => {
      xrp_usd = parseInt(xrpusd);
      document.getElementById("usd-amountxrp").value = xrpusd.toFixed(2);
      return xrp_usd;
    });

  // Get the NGN exchange rate from the PHP file
  let ngnRate = await fetch('api/ngnrate.php')
    .then(res => res.json())
    .then(ratengn => {
      ratengn = parseInt(ratengn);
      return ratengn;
    });

  // Calculate the price of xrp in Naira
  
  let xrpInNaira = exchangeRate * ngnRate;
  let formattedFigure = addCommas(xrpInNaira);
  console.log(formattedFigure);
  // Display the price of xrp in Naira in HTML
  //document.getElementById("nairaPrice").value = xrpInNaira.toFixed(2);
  document.getElementById("nairaxrpPrice").innerHTML = "₦"+ formattedFigure;
  
}


function addCommas(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}  
  setInterval(
  function() {
    document.getElementById("nairaxrpPrice").value = "";
    document.getElementById("xrp-amount").value = ""; 
    document.getElementById("usd-amountxrp").value = "";
   
  }, 15000);
  
