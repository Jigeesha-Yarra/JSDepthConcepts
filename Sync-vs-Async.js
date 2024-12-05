//Synchronous (blocking):

// Things happen one after another. Imagine you're in a queue at a fast-food.
// You can't take your order until the person in front of you finishes.
console.log("Ordering food...");
console.log("Preparing food...");
console.log("Food is ready!");



//Asynchronous (non-blocking):

// Things can happen at same time. Imagine Ordering food online. You place your order,
// and while it's being prepared, you can play a game or watch a movie.
console.log("Ordering food...");
setTimeout(() => console.log("Preparing food..."),2000); // simulates delay
console.log("While waiting, watching netflix");



// When to use:
    // Use synchronous for simple tasks that need to be done in sequence.
    // Use asynchronous for tasks that take time (e.g., fetching data from the internet, reading files).