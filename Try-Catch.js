// What they mean:
    // Errors happen in programs, just like accidents in real life.
    // Try: Test a block of code.
    // Catch: Handle any errors that happen.

//Example: 
//Imagine you’re trying to withdraw money from an ATM, but your card gets rejected. 
//Instead of crashing the machine, the ATM shows an error message.

try{
    let balance = 500;
    let withdraw = 600;

    if(withdraw > balance) throw "Insufficient balance!";
    balance -= withdraw;
    console.log("Transaction successful!");
}catch(e){
    console.log(e); // Insufficient balance!
}


// When to use:
// Use try/catch to prevent crashes and handle errors gracefully in your code.