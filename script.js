// Welcome message when the page opens
alert("Welcome to my CV website");

// Change heading color when clicked
document.querySelector("h1").onclick = function () {
    this.style.color = "#9c27b0";
};

// Add a simple message at the bottom of the page
let message = document.createElement("p");
message.textContent = "Thank you for visiting my CV website!";
message.style.textAlign = "center";
message.style.fontWeight = "bold";

document.body.appendChild(message);
function showMessage(){
    alert("Thank you for visiting my CV website!");
}