

// // addEventListener takes 2 arguments:
// // 1. event type: type of event we want to listen for
// // 2. function to run when event is triggered: the function that will be run when the event is triggered
// document.querySelector("button").addEventListener("click", handleClickEvent);
//
//
// function handleClickEvent(buttonsArray) {
//     console.log("click");
// }


// another way is top use anaynomys function

var buttonsArray = document.querySelectorAll("button");
for (const element of buttonsArray) {
    element.addEventListener("click", function () {
        animation(element);
        var innerText = this.innerText;
        switch (innerText) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
            break;
            default: console.log(innerText)
        }
    });
}


// add event listener to keydown event
document.addEventListener("keydown", function (event) {
    animation(document.querySelector("." + event.key));
    switch (event.key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
        default: console.log(event.key)
    }
})

function animation(element) {
    element.classList.add("pressed");
    setTimeout(function () {
        element.classList.remove("pressed");
    }, 100);
}