var today = new Date();
var hour = today.getHours();
var status;
if (hour > 15 || hour < 10){
  status="Unfortunetly we are closed for the day. We are open tuesday-Saturday from 10:00-3:00";
  document.getElementById("demo").style.background = "red";
}
else{
  status="We are Open. Hurry we close at 15:00";
  document.getElementById("demo").style.background = "green";
}
document.getElementById("demo").innerHTML = status;