let name =prompt("What is your name, broski?")
let nameSpan = document.getElementById('nameUser')
nameSpan.innerHTML = name;
nameSpan.style.fontSize = "2rem";
nameSpan.style.color = "red";

let textThingy = document.getElementById("textThingy");
textThingy.style.fontSize = "2rem";
textThingy.style.color = "white";
textThingy.style.fontFamily = "Verdana";

document
  .getElementById("changeBGcolor0")
  .addEventListener("click", function (event) {
    console.log(event);
    document.body.style.backgroundColor = "darkred";
    textThingy.innerHTML =
      "You changed the BG color to Dark Red.";
  });
document
  .getElementById("changeBGcolor1")
  .addEventListener("click", function (event) {
    console.log(event);
    document.body.style.backgroundColor = "aqua";
    textThingy.innerHTML =
      "You changed the BG color to Aqua.";
  });
  document
  .getElementById("changeBGcolor2")
  .addEventListener("click", function (event) {
    console.log(event);
    document.body.style.backgroundColor = "purple";
    textThingy.innerHTML =
      "You changed the BG color to Purple.";
  });
    document
  .getElementById("changeFont")
  .addEventListener("click", function (event) {
    console.log(event);
    document.body.style.fontFamily = "Times New Roman";
    textThingy.style.fontFamily = "Times New Roman";
    textThingy.innerHTML =
      "You changed the font to be Times New Roman.";
  });
    document
  .getElementById("changeFontBack")
  .addEventListener("click", function (event) {
    console.log(event);
    document.body.style.fontFamily = "Verdana";
    textThingy.style.fontFamily = "Verdana";    
    textThingy.innerHTML =
      "You changed the font to be Verdana.";
  });