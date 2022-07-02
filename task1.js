var button1 = document.getElementById("btn-1");
button1.onclick = function() {
    var heading1 = document.getElementsByClassName("heading");
    heading1[0].textContent = "You clicked button 1";
    var heading3 = document.getElementsByClassName("coloured-heading");
    heading3[0].textContent = "";
};

var button2 = document.getElementById("btn-2")
button2.onclick = function() {
    var heading2 = document.getElementsByClassName("heading");
    heading2[0].textContent = "You clicked button 2";
    var heading4 = document.getElementsByClassName("coloured-heading");
    heading4[0].textContent = "";
};
