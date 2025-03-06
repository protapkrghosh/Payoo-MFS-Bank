document
   .getElementById("addMoneyBtn")
   .addEventListener("click", function (event) {
      event.preventDefault();
      const addMoneyPin = parseFloat(document.getElementById("addMoneyPin").value);
      const amount = parseFloat(document.getElementById("amount").value);
      const currentBalance = parseFloat(
         document.getElementById("mainBalance").textContent
      );

      if (amount && addMoneyPin) {
         if (addMoneyPin === 107754) {
            const newBalance = currentBalance + amount;
            document.getElementById("mainBalance").textContent = newBalance;
         } else {
            alert("Incorrect pin!");
         }
      } else {
         alert("Enter valid amount and pin!");
      }
   });


