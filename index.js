function getEmail (){

  let email = document.querySelector("#emailInput").value;
  document.querySelector("#title").innerHTML = "Click the Following Links";


let adviceAddress = "https://www.breezechms.com/open/unsubscribe?email=" + email + "&blog=advice";
let updatesAddress = "https://www.breezechms.com/open/unsubscribe?email=" + email + "&blog=updates";

console.log (adviceAddress);
console.log (updatesAddress);

let newTab = 'target="_blank"';

let adviceLink = "<a href=" + adviceAddress + " " + newTab + " >Unsubscribe The Advice Blog</a>";
let updatesLink = "<a href=" + updatesAddress + " " + newTab + ">Unsubscribe The Updates Blog</a>";

console.log (adviceLink);
console.log (updatesLink);

document.querySelector("#text1").innerHTML = adviceLink;
document.querySelector("#text2").innerHTML = updatesLink;

}
