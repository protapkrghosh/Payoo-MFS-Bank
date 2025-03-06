document
   .getElementById("add-money")
   .addEventListener("click", function (event) {
      event.preventDefault();
      const amount = parseFloat(document.getElementById("amount").value);
      const pin = parseFloat(document.getElementById("pinNumber").value);
      const currentBalance = parseFloat(
         document.getElementById("mainBalance").textContent
      );
      console.log(amount, pin, currentBalance);

      if (amount && pin) {
         if (pin === 107754) {
            const newBalance = currentBalance + amount;
            document.getElementById("mainBalance").textContent = newBalance;
         } else {
            alert("Incorrect pin!");
         }
      } else {
         alert("Enter valid amount and pin!");
      }
   });
