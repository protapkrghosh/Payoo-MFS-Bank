document
   .getElementById("addMoneyBtn")
   .addEventListener("click", function (event) {
      event.preventDefault();

      const account = document.getElementById("accountNumber").value.toString();
      const amount = getInputValueByID("amount");
      const addMoneyPin = getInputValueByID("addMoneyPin");
      const currentBalance = getInnerTextByID("mainBalance");

      if (account && amount && addMoneyPin) {
         if (addMoneyPin === 107754) {
            const newBalance = currentBalance + amount;
            setInnerTextByIDAndValue("mainBalance", newBalance);

            const historyContainer = document.getElementById("historyContainer");
            const p = document.createElement("p");
            p.innerText = `
               Added $${amount} from ${account} account number.
            `;
            historyContainer.appendChild(p);
         } else {
            alert("Incorrect pin!");
         }
      } else {
         alert("Enter valid amount and pin!");
      }
   });
