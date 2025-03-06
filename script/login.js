document.getElementById("login-btn").addEventListener("click", function (event) {
   event.preventDefault();
   const accountNumber = document.getElementById("accountNumber").value;
   const pinNumber = document.getElementById("pinNumber").value;
   const pin = parseInt(pinNumber);
   
   if (accountNumber.length === 11) {
      if (pin === 107754) {
         window.location.href = "./main.html";
      }
      else {
         alert("Incorrect pin!");
      }
   }
   else {
      alert('Please input account number 11 digits');
   }
});


