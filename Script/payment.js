document.getElementById("next").onclick = function () {
    alert("4321 is your OTP for Payment")
   location.href = "\otp.html";
};



var finaltotal = JSON.parse(localStorage.getItem("finaltotal"));
var total = JSON.parse(localStorage.getItem("total"));   


   if(total > 749){
   var finaltotal = total +0;
   document.querySelector("#total").textContent = `₹${total}`  
   document.querySelector("#deliverycharge").textContent = `₹${0}`  
   document.querySelector("#finaltotal").textContent = finaltotal;
   }
   else if (total < 749 && total > 0){
       finaltotal = total + 39;
       document.querySelector("#total").textContent = `₹${total}`  
       document.querySelector("#deliverycharge").textContent = `₹${39}`
       document.querySelector("#finaltotal").textContent = `₹${finaltotal}`;
   }
   else{
       finaltotal = total + 0;
       document.querySelector("#total").textContent = `₹${total}`  
       document.querySelector("#deliverycharge").textContent = `₹${0}`
       document.querySelector("#finaltotal").textContent = `₹${finaltotal}`;

   }


console.log(total)
console.log(finaltotal)