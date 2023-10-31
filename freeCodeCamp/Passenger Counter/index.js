// document.getElementById("count").innerText = 5
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el")
let count = 0;

function increment() {
     count += 1;
     countEl.textContent = count;    
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}
console.log(count);


// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function logLapTime() {
//     let total = lap1 + lap2 + lap3
//     console.log(total);
// }
// logLapTime();

// let lapsCompleted = 0;
// Creat a function that increments the lapsCompleted variable with one
// Run it three times

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1;
// }

// incrementLap();
// incrementLap();
// incrementLap();

// console.log(lapsCompleted);

// let username = "Alex"
// let message = "You have three new notifications";
// let messageToUser = message + ", " + username + "!";
// console.log(messageToUser);


// let myName = "Alex";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + myName;
// console.log(myGreeting);

// let welcomeEl = document.getElementById("welcome-el");

// let myName = "Alex";
// let greeting = "Welcome back, ";

// welcomeEl.innerText = greeting + myName + "!";

// welcomeEl.innerText += "👋";

