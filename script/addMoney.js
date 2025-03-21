document
   .getElementById("addMoneyBtn")
   .addEventListener("click", function (event) {
      event.preventDefault();

      const addMoneyPin = getInputValueByID("addMoneyPin");
      const amount = getInputValueByID("amount");
      const currentBalance = getInnerTextByID("mainBalance");

      if (amount && addMoneyPin) {
         if (addMoneyPin === 107754) {
            const newBalance = currentBalance + amount;
            setInnerTextByIDAndValue("mainBalance", newBalance);
         } else {
            alert("Incorrect pin!");
         }
      } else {
         alert("Enter valid amount and pin!");
      }
   });
