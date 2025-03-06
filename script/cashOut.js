document
   .getElementById("withdrawBtn")
   .addEventListener("click", function (event) {
      event.preventDefault();
      const cashOutPin = parseFloat(
         document.getElementById("CashOutPin").value
      );
      const cashOutAmount = parseFloat(
         document.getElementById("cashOutAmount").value
      );
      const currentBalance = parseFloat(
         document.getElementById("mainBalance").textContent
      );

      if (cashOutAmount <= 0) {
         alert("Please enter your amount");
      } else if (currentBalance >= cashOutAmount) {
         if (cashOutAmount && cashOutPin && cashOutPin === 107754) {
            const remainingBalance = currentBalance - cashOutAmount;
            document.getElementById("mainBalance").textContent =
               remainingBalance;
         }
      } else {
         alert("Insufficient amount!");
      }
   });
