// while
// do while
// for loop
// for in
// for of

for(let i = 0; i < 10; i++) {
    console.log(i)
}

arr = []
for (let i = 5; i<10; i++) {
    arr.push(i)
}
arr

// Nested loop
let arrOfArray = []

for (let i = 0; i<3; i++) {
    arrOfArray.push([])
    for(let j = 0; j<7; j++) {
        arrOfArray[i].push(j)
    }
}

arrOfArray

let names = ["Adam","Fakhri","Izzat","Song"]
for(let i = 0; i<names.length; i++) {
    console.log("Hello " +names[i])
}

// for of loop --> iterate through array

for (let el of names) {
    console.log(el)
}

// for in loop --> iterate through an object
let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
  };

  for (let prop in car) {
    console.log(car[prop])
  }

  for (let prop in car) {
    console.log(prop)
  }

  let arrKeys = Object.keys(car)
  arrKeys 

  for (let key of Object.keys(car)) {
    console.log(key)
  }

  for(let i=0; i<arrKeys.length; i++) {
    console.log(arrKeys[i]+ ": "+ car[arrKeys[i]])
  }

  let arrEntries = Object.entries(car)
  arrEntries 

  for (const [key,value] of Object.entries(car)) {
    console.log(key,":", value)
  }
  