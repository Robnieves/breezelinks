function getEmail (){

  let email = document.querySelector("#emailInput").value;
  document.querySelector("#title").innerHTML = "<i>Copy These Links</i>";

  let adviceLink = "https://www.breezechms.com/open/unsubscribe?email=" + email + "&blog=updates";
  let updatesLink = "https://www.breezechms.com/open/unsubscribe?email=" + email + "&blog=updates";

  document.querySelector("#text1").innerHTML = adviceLink;
  document.querySelector("#text2").innerHTML = updatesLink;



}
