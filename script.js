// JavaScript to handle the splash screen
document.addEventListener("DOMContentLoaded", function () {
    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");

    // Hide the splash screen and show main content after 3 seconds
    setTimeout(() => {
        splashScreen.style.display = "none";
        mainContent.style.display = "block";
    }, 3000);
});
