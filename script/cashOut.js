document
   .getElementById("withdrawBtn")
   .addEventListener("click", function (event) {
      event.preventDefault();
      const agentNumber = document.getElementById("agentNumber").value;
      const cashOutAmount = getInputValueByID("cashOutAmount");
      const cashOutPin = getInputValueByID("CashOutPin");
      const currentBalance = getInnerTextByID("mainBalance");

      if (!agentNumber || !cashOutAmount || !cashOutPin) {
         alert("Please enter agent number, amount and pin");
      } else if (cashOutPin === 107754) {
         if (currentBalance >= cashOutAmount) {
            const remainingBalance = currentBalance - cashOutAmount;
            setInnerTextByIDAndValue("mainBalance", remainingBalance);

            const historyContainer =
               document.getElementById("historyContainer");
            const notFound = document.getElementById("notFound");

            notFound.classList.remove("block");
            notFound.classList.add("hidden");

            const p = document.createElement("p");
            p.innerText = `
               Cashout $${cashOutAmount} from ${agentNumber} account number.
            `;
            historyContainer.appendChild(p);
         } else {
            alert("Insufficient amount");
         }
      } else {
         alert("Please enter correct pin");
      }
   });
