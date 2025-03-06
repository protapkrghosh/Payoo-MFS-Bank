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
