document.getElementById("cashOutSection").style.display = "none";

document.getElementById("addMoney").addEventListener("click", function () {
   handleToggle("addAmountSection", "block");
   handleToggle("cashOutSection", "none");
});

document.getElementById("cashOutBtn").addEventListener("click", function () {
   handleToggle("addAmountSection", "none");
   handleToggle("cashOutSection", "block");
});

const handleToggle = (id, status) => {
   document.getElementById(id).style.display = status;
};
