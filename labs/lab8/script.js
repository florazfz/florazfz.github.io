function toggleTheme() {
    //Gran <body> element and toggle dark-mode class on <body>
    var bodyElement = document.body;
    bodyElement.classList.toggle("dark-mode");
}

//Get toggle button element and store it in a variable with a reasonable name
var buttonVariable = document.getElementById("toggleButton");
buttonVariable.onclick = toggleTheme;