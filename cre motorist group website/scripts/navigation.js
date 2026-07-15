/*
    Student Name: Zack Jenks
    File Name: navigation.js
    Date: 07/17/2026
*/

// dropDown menu function for mobile viewports
function dropDown() {
    var menu = document.getElementById("menu-links");
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}