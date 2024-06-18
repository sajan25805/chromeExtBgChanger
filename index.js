// This asynchronous function 'sayHello' will be executed when the user clicks a button with the ID "myButton".
async function sayHello() {
  // Query for the currently active tab in the browser.
  let [tab] = await chrome.tabs.query({ active: true });

  // Execute a script in the context of the active tab.
  chrome.scripting.executeScript({
    target: { tabId: tab.id }, // Specify the tab in which to run the script.
    func: () => {
      // Define the function to be executed in the tab.
      document.body.style.backgroundColor = "red"; // Changes the color of the tab we are into red.
      alert("Say Hello"); // This function shows an alert with the message "Say Hello".
    },
  });
}

// Add an event listener to the button with ID "myButton".
// When the button is clicked, it calls the 'sayHello' function.
document.getElementById("myButton").addEventListener("click", sayHello);
