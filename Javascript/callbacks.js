console.log("Callbacks")

function doSomething(callback) {
    //do whatever
    callback()
}

function sayHi(){
    console.log("hi")
}

//doSomething(sayHi)

function judge(grade) {
    switch(true) {
        case grade == "A":
            console.log(" Wow grade is A");
            break;
        case grade == "B":
            console.log("Good grade is B");
            break;
        case grade == "C":
            console.log("Mehgrade is low C");
            break;
        default:
            console.log("What ah!???")
    }
}

function getGrade(score, callback) {
    let grade;
    switch (true) {
        case score >= 90 :
            grade = "A";
            break;
        case score >= 80 :
            grade = "B";
            break;
        case score >= 70 :
            grade = "C";
            break;
        default:
            grade ="F"
    }
    callback(grade)
}

getGrade(91, judge)


setInterval(encourage, 5000)
function encourage() {
    console.log("You are doing awesome!!!")
}