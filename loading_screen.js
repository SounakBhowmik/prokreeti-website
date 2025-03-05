// Function to hide the loading screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById("loading-screen");
  
    // Debugging: Check if the loading screen exists
    if (!loadingScreen) {
      console.error("Loading screen not found!");
      return;
    }
  
    console.log("Loading screen found"); // Debugging statement
  
    // Check if the user has already seen the loading screen
    const hasSeenLoadingScreen = localStorage.getItem("hasSeenLoadingScreen");
  
    if (hasSeenLoadingScreen) {
      // If the user has already seen the loading screen, hide it immediately
      loadingScreen.classList.add("hide");
      return;
    }
  
    // Set a minimum delay of 2 seconds
    const minDelay = 2000; // 2 seconds in milliseconds
    let pageLoaded = false;
    let delayCompleted = false;
  
    // Function to hide the loading screen
    function hideScreen() {
      if (pageLoaded && delayCompleted) {
        console.log("Hiding loading screen"); // Debugging statement
        loadingScreen.classList.add("hide");
  
        // Mark that the user has seen the loading screen
        localStorage.setItem("hasSeenLoadingScreen", "true");
      }
    }
  
    // Wait for the page to fully load
    window.addEventListener("load", () => {
      console.log("Page fully loaded"); // Debugging statement
      pageLoaded = true;
      hideScreen(); // Check if we can hide the screen
    });
  
    // Wait for the minimum delay
    setTimeout(() => {
      console.log("Minimum delay completed"); // Debugging statement
      delayCompleted = true;
      hideScreen(); // Check if we can hide the screen
    }, minDelay);
  }
  
  // Run the function to hide the loading screen
  hideLoadingScreen();