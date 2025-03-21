document
   .getElementById("withdrawBtn")
   .addEventListener("click", function (event) {
      event.preventDefault();
      const cashOutPin = getInputValueByID("CashOutPin");
      const cashOutAmount = getInputValueByID("cashOutAmount");
      const currentBalance = getInnerTextByID("mainBalance");

      if (!cashOutAmount || !cashOutPin) {
         alert("Please enter pin and amount");
      }
      else if (cashOutPin === 107754) {
         if (currentBalance >= cashOutAmount) {
            const remainingBalance = currentBalance - cashOutAmount;
            document.getElementById("mainBalance").textContent =
               remainingBalance;
         }
         else {
            alert("Insufficient amount");
         }
      } else {
         alert("Please enter correct pin");
      }
   });
