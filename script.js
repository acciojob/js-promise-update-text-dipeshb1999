//your JS code here. If required.
// Get the element with ID "output"
const outputElement = document.getElementById('output');

// Function that returns a promise
function delayedGreeting() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });
}

// Call the function and update the text of the output element after the promise resolves
delayedGreeting()
  .then(result => {
    outputElement.innerText = result;
  });
