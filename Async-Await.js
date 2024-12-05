// What they mean:

    // Async/Await makes writing asynchronous code easier to read, like writing synchronous code.
    // Instead of chaining .then() and .catch(), you can use await to pause and wait for a Promise to resolve.


// Example: Pizza delivery example with async/await:

const orderPizza = () => {
    return new Promise((resolve,reject) => {
        let isDelivered = true;
        if(isDelivered) resolve("Pizza Delivered");
        else reject("Delivery Failed");
    });
};

const getPizza = async() => {
    try{
        const message = await orderPizza();
        console.log(message);
    }catch(e){
        console.log(e);
    }
};

getPizza(); // output: "Pizza Delivered"

// When to use:
// Use async/await when you want clean and easy-to-read asynchronous code.