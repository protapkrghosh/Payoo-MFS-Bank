document.getElementById("addAmountSection").style.display = "none";

document.getElementById("addMoney").addEventListener("click", function () {
   document.getElementById("addAmountSection").style.display = "block";
   document.getElementById("cashOutSection").style.display = "none";
});

document.getElementById("cashOutBtn").addEventListener("click", function () {
   document.getElementById("addAmountSection").style.display = "none";
   document.getElementById("cashOutSection").style.display = "block";
});
