document
   .getElementById("addMoneyBtn")
   .addEventListener("click", function (event) {
      event.preventDefault();

      const account = document.getElementById("accountNumber").value.toString();
      const amount = getInputValueByID("amount");
      const addMoneyPin = getInputValueByID("addMoneyPin");
      const currentBalance = getInnerTextByID("mainBalance");
      const selectedBank = document.getElementById("allBank").value;

      if (account && amount && addMoneyPin) {
         if (amount < 0) {
            alert("Please provide positive number");
            return;
         }

         if (addMoneyPin === 107754) {
            const newBalance = currentBalance + amount;
            setInnerTextByIDAndValue("mainBalance", newBalance);

            const historyContainer =
               document.getElementById("historyContainer");
            const notFound = document.getElementById("notFound");

            notFound.classList.remove("block");
            notFound.classList.add("hidden");

            const div = document.createElement("div");
            div.className = "bg-gray-200 rounded-lg my-4 p-5";
            div.innerHTML = `
               <h2>Added Money from <span class="font-semibold">${selectedBank}</span></h2>
               <h3>Amount: $<span class="font-semibold">${amount}</span></h3>
               <p>Account Number: ${account}</p>
            `;
            historyContainer.appendChild(div)
         } else {
            alert("Incorrect pin!");
         }
      } else {
         alert("Enter valid amount and pin!");
      }
   });
