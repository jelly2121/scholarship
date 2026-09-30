document.getElementById("loginForm").addEventListener("submit",function(e){
 e.preventDefault();
 const email=document.getElementById("email").value.trim();
 const password=document.getElementById("password").value;
 const msg=document.getElementById("loginMessage");
 if(email==="admin@example.com" && password==="admin123"){
   sessionStorage.setItem("loggedIn","true");
   location.href="dashboard.html";
 }else{
   msg.textContent="Invalid login. Use the demo account shown below.";
 }
});