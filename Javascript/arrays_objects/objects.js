console.log("objects")
let arr = [0,1,2]
console.log(typeof arr)

let dog = { dogName: "Javascript",
            weight: 2.4,
            color: "brown",
            breed: "chihuahua",
            age: 3,
            burglarBiter: true
        };
let dogColor1 = dog["color"]
dogColor1 
let dogColor2 = dog.color
dogColor2
dog["color"] = "blue"
dog.weight = 2.3
dog

console.log(typeof dog.age)
// dog["age"]="three"
// console.log(typeof dog.age)
let agevariable = 'age'
console.log(dog[agevariable])


let company = { companyName: "Healthy Candy",
                activity: "food manufacturing",
                address: {
                  street: "2nd street",
                  number: "123",
                  zipcode: "33116",
                  city: "Miami",
                  state: "Florida"
                },
                yearOfEstablishment: 2021 
              };

company
console.log(company.address)
console.log(company.address.zipcode)
console.log(company["address"]["number"])

// Arrays in Objects
company = { companyName: "Healthy Candy",
                activities: ["food manufacturing", 
"improving kids' health", "manufacturing toys"],
                address: {
                  street: "2nd street",
                  number: "123",
                  zipcode: "33116",
                  city: "Miami",
                  state: "Florida"
                },
                yearOfEstablishment: 2021 
              };

let activity = company.activities[1]
activity

// Objects in Array
let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
  }];

  let streetName = addresses[0].street
  streetName

// Objects in arrays in Objects
company = { companyName: "Healthy Candy",
                    activities: [ "food manufacturing", 
"improving kids' health", 
"manufacturing toys"],
                    address: [{
                      street: "2nd street",
                      number: "123",
                      zipcode: "33116",
                      city: "Miami",
                      state: "Florida"
                    },
                    {
                      street: "1st West avenue",
                      number: "5",
                      zipcode: "75001",
                      city: "Addison",
                      state: "Texas"
                    }],
                    yearOfEstablishment: 2021 
                  };

let streetName2 = company.address[0].street
streetName2