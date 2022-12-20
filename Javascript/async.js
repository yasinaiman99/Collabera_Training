console.log("async...")

function saySomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("something "+x);
        }, 2000)
    });
}

async function talk(x) {
    const words = await saySomething(x)
    console.log(words)
}

talk(2)
talk(5)


function saySomething2(x, timer) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("something "+x);
        }, timer)
    });
}

async function talk2(x, timer) {
    const words = await saySomething2(x, timer)
    console.log(words)
}

talk2(2, 1000)
talk2(3, 2000)
talk2(4, 40)