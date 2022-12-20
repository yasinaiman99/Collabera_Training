arr = ["black","white","orange"]

arr
//console.log(arr)

arr1 = new Array("purple","orange")
arr1  

arr3 = new Array(10)
arr4 = [10]
arr3
arr4

arr0 = ["hi there", 5, true]
console.log(typeof arr0[0])
console.log(typeof arr0[1])
console.log(typeof arr0[2])
console.log(arr[arr.length-1])

const newarr = ["hi there"]
newarr
newarr[0] = "new val"
newarr

arr[0]="magenta"
arr

numbers = [1,2,3]
console.log(numbers.length)
numbers[5] = 5
console.log(numbers.length)
numbers
arr
arr.push("black")
arr
arr.splice(2,0,'pink','blue','cyan')
arr
arr.splice(2,1)
arr

//concat --> Concatenation
let arr5 = [1,2,3]
let arr6 = [4,5,6]
let arr7 = arr5.concat(arr6)
delete arr7[2]
arr7
z = arr7.splice(2,2)
z
arr7
x = arr7.pop()
x
arr7
y = arr7.shift()
y
arr7


arr8 = [2,6,7,8,6,1,2,6]
let findVal = arr8.find(function(e){ return e == 6})
findVal
let findVal2 = arr8.find(e => e==6)
findVal2

let findIndex = arr8.indexOf(6)
findIndex
let findIndex3 = arr8.indexOf(6,5)
findIndex3
let lastNum = arr8.lastIndexOf(6)
lastNum

arr8.sort()
arr8
arr
arr.sort()
arr
arr.reverse()
arr
arr8.reverse()
arr8

//Exercise

arrList = new Array("Milk","Bread","Apples")
arrList
arrList.splice(1,1,'Banana','Egg')
arrList
arrList.shift()
arrList
arrList.sort()
arrList
let shopIndex = arrList.indexOf('Milk')
shopIndex
arrList.splice(2,0,'Carrot','Lettuce')
arrList 


let arrayOfArrays = [[1,2,3],[4,5,6],[7,8,9]]
let val = arrayOfArrays[0]
val
console.log(val[0])
console.log(arrayOfArrays[1][1])
