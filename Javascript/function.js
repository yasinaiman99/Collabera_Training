function addNum(x,y){
    console.log(x+y)
}

addNum(2,3)
//console.log(addNum)

console.log(addNum())

function addNum2(x=1,y=1){
    console.log(x+y)
}

console.log(addNum2())
console.log(addNum2(6))
console.log(addNum2(6,9))

// (param1, param2) => body of the function
// () => body of the function
// param => body of the function

// (param1, param2) => {
    //line1
    //line2
//};

function doSomething(x) {
    console.log(x)
}

let doingArrow = x => console.log(x)
doingArrow("Helllooo")
console.log(doingArrow)

let addTwoNums = (x,y) => console.log(x+y)

addTwoNums(2,30)

let sayHi= () => console.log("say Hi")
sayHi()

const arr = ["giraffe","lion","elephant"]

arr.forEach(e => console.log(e))