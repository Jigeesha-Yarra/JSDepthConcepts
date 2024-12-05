// What they mean:
// A Promise is like a real-life promise. It's a guarantee that something will either:
    // Be fulfilled (success).
    // Be rejected (failure).
// Promises help you handle asynchronous tasks better.



// Example: Imagine you ordered a pizza online. The promise:
// If the pizza arrives, you’re happy. (fulfilled)
// If the delivery fails, you’re upset. (rejected)

const orderPizza = new Promise((resolve,reject) => {
    let isDelivered = true;
    if(isDelivered) resolve("Delivered Successfully");
    else reject("Delivery failed.");
});
orderPizza
.then((message) => console.log(message)) // Fulfilled(runs if resolved)
.catch((error) => console.log(error)) // Rejected(runs if rejected)
.finally(() => console.log("Promise complete."));


// When to use (OR) Why use Promises?:
// When working with tasks that take time, like API calls, reading files, or timers.