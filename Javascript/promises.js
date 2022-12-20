console.log("Promises....")

let promise = new Promise (function(resolve, reject){
    //do something that might take a while
    // let's just set x instead in this example

    let x = 20
    if (x > 10) {
        resolve(x)
    } else {
        reject("Too low")
    }
});

promise.then(
    function(value){
        console.log("Success: ", value)
    },
    function(error) {
        console.log("Error:" , error)
    }
)