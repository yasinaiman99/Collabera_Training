//console.log("built in ...")

let s = "Hello"
// console.log( 
//     s.concat(" there!")
//     .toUpperCase().replace("THERE","you")
//     .concat(" You are amazing!")
// )

let x = 7
console.log(Number.isNaN(x))

// Decode / Encode

let uri = "https//mygoogle.com/submit?name=fakhri talat";
let encoded_uri = encodeURI(uri)
console.log("Encoded: ", encoded_uri)
let decoded_uri = decodeURI(encoded_uri)
console.log("Decoded: ", decoded_uri)

// Parsing Numbers
let str_int = "6"
let int_int = parseInt(str_int)
console.log(typeof int_int, typeof str_int)

let str_int2 = "5"
console.log(str_int+str_int2)
let int_int2 = parseInt(str_int2)

console.log(int_int+int_int2)

let str_float = "7.6"
let int_float = parseInt(str_float)
int_float
let float_float = parseFloat(str_float)
float_float

let str_binary = "0b101"
let int_binary = parseInt(str_binary)
int_binary

//------//
let arr = ["apple","banana","orange",false ,3,true,4]

function printStuff (element,index) {
    console.log("Print stuff: ", element, "on array position: ",index)
}

//printStuff("apple",4)

//arr.forEach(printStuff)

function checkString(element, index) {
    return typeof element == 'number'
    // string, boolean
}
// console.log(typeof 3)
//console.log(checkString(true,1))
let filterArr = arr.filter(checkString);
console.log(filterArr)