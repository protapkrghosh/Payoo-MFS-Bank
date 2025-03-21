handleToggle("cashOutSection", "none");
handleToggle("transferMoneySection", "none");
handleToggle("transactionHistorySection", "none");

document.getElementById("addMoney").addEventListener("click", function () {
   handleToggle("cashOutSection", "none");
   handleToggle("transactionHistorySection", "none");
   handleToggle("transferMoneySection", "none");
   handleToggle("addAmountSection", "block");
});

document.getElementById("cashOutBtn").addEventListener("click", function () {
   handleToggle("addAmountSection", "none");
   handleToggle("transferMoneySection", "none");
   handleToggle("transactionHistorySection", "none");
   handleToggle("cashOutSection", "block");
});

document.getElementById("transferMoneyBtn").addEventListener("click", () => {
   handleToggle("addAmountSection", "none");
   handleToggle("cashOutSection", "none");
   handleToggle("transactionHistorySection", "none");
   handleToggle("transferMoneySection", "block");
});

document.getElementById("historyBtn").addEventListener("click", () => {
   handleToggle("addAmountSection", "none");
   handleToggle("cashOutSection", "none");
   handleToggle("transferMoneySection", "none");
   handleToggle("transactionHistorySection", "block");
});
